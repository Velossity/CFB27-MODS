const fs = require('fs');
const path = require('path');
const os = require('os');

const GAME_SAVE_FOLDERS = [
  { game: 'College Football 27', folder: 'College Football 27', savesSubdir: 'Saves' },
];

const KNOWN_SCHOOLS = [
  'Alabama', 'Arkansas', 'Auburn', 'Florida', 'Georgia', 'Kentucky', 'LSU', 'Mississippi State',
  'Missouri', 'Oklahoma', 'Ole Miss', 'South Carolina', 'Tennessee', 'Texas', 'Texas A&M', 'Vanderbilt',
  'Illinois', 'Indiana', 'Iowa', 'Maryland', 'Michigan', 'Michigan State', 'Minnesota', 'Nebraska',
  'Northwestern', 'Ohio State', 'Oregon', 'Penn State', 'Purdue', 'Rutgers', 'UCLA', 'USC', 'Washington', 'Wisconsin',
  'Arizona', 'Arizona State', 'Baylor', 'BYU', 'Cincinnati', 'Colorado', 'Houston', 'Iowa State', 'Kansas',
  'Kansas State', 'Oklahoma State', 'TCU', 'Texas Tech', 'UCF', 'Utah', 'West Virginia',
  'Boston College', 'California', 'Clemson', 'Duke', 'Florida State', 'Georgia Tech', 'Louisville', 'Miami',
  'NC State', 'North Carolina', 'Pittsburgh', 'SMU', 'Stanford', 'Syracuse', 'Virginia', 'Virginia Tech', 'Wake Forest',
  'Notre Dame', 'Boise State', 'Memphis', 'Tulane', 'Army', 'Navy',
];

function safeStat(filePath) {
  try {
    return fs.statSync(filePath);
  } catch {
    return null;
  }
}

function listSavFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return [];

  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => /\.(sav|bin|mc02)$/i.test(name))
    .map((name) => {
      const fullPath = path.join(dirPath, name);
      const stat = safeStat(fullPath);
      return {
        name,
        path: fullPath,
        size: stat ? stat.size : 0,
        modified: stat ? stat.mtime.toISOString() : null,
      };
    })
    .sort((a, b) => new Date(b.modified || 0) - new Date(a.modified || 0));
}

function scanSaveFolders(documentsPath = path.join(os.homedir(), 'Documents')) {
  return GAME_SAVE_FOLDERS.map(({ game, folder, savesSubdir }) => {
    const savesPath = path.join(documentsPath, folder, savesSubdir);
    const exists = fs.existsSync(savesPath);
    return {
      game,
      savesPath,
      exists,
      files: exists ? listSavFiles(savesPath) : [],
    };
  });
}

function readSaveSample(filePath, maxBytes = 4 * 1024 * 1024) {
  const stat = safeStat(filePath);
  if (!stat) return null;
  const size = Math.min(stat.size, maxBytes);
  const buf = Buffer.alloc(size);
  const fd = fs.openSync(filePath, 'r');
  try {
    fs.readSync(fd, buf, 0, size, 0);
  } finally {
    fs.closeSync(fd);
  }
  return { buf, stat, sizeRead: size };
}

function extractAsciiStrings(buf, minLen = 4) {
  const out = new Set();
  let current = '';
  for (let i = 0; i < buf.length; i++) {
    const c = buf[i];
    if (c >= 32 && c <= 126) {
      current += String.fromCharCode(c);
    } else if (current.length >= minLen) {
      out.add(current);
      current = '';
    } else {
      current = '';
    }
  }
  if (current.length >= minLen) out.add(current);
  return [...out];
}

function extractUtf16Strings(buf, minLen = 3) {
  const out = new Set();
  let current = '';
  for (let i = 0; i < buf.length - 1; i += 2) {
    const code = buf.readUInt16LE(i);
    if (code >= 32 && code <= 126) {
      current += String.fromCharCode(code);
    } else if (current.length >= minLen) {
      out.add(current);
      current = '';
    } else {
      current = '';
    }
  }
  if (current.length >= minLen) out.add(current);
  return [...out];
}

function findSchoolNames(strings) {
  const found = [];
  const lowerStrings = strings.map((s) => s.toLowerCase());
  for (const school of KNOWN_SCHOOLS) {
    const needle = school.toLowerCase();
    if (lowerStrings.some((s) => s === needle || s.includes(needle))) {
      found.push(school);
    }
  }
  return [...new Set(found)];
}

function guessCoachName(strings) {
  const coachPatterns = strings.filter((s) => /^coach\s/i.test(s) || /head coach/i.test(s));
  for (const line of coachPatterns) {
    const m = line.match(/coach[:\s]+([A-Za-z][A-Za-z .'-]{2,30})/i);
    if (m) return m[1].trim();
  }
  return '';
}

function guessSeasonYear(strings) {
  const years = [];
  for (const s of strings) {
    const matches = s.match(/\b(20[2-3][0-9])\b/g);
    if (matches) years.push(...matches.map(Number));
  }
  if (!years.length) return null;
  const now = new Date().getFullYear();
  const plausible = years.filter((y) => y >= now - 5 && y <= now + 8);
  if (!plausible.length) return null;
  return Math.max(...plausible);
}

function inspectSaveFile(filePath) {
  const stat = safeStat(filePath);
  if (!stat) {
    return { ok: false, error: 'File not found or cannot be read.' };
  }

  let headerHex = '';
  try {
    const sample = readSaveSample(filePath, 64);
    if (sample) headerHex = sample.buf.toString('hex');
  } catch (err) {
    return { ok: false, error: err.message };
  }

  return {
    ok: true,
    filePath,
    fileName: path.basename(filePath),
    size: stat.size,
    modified: stat.mtime.toISOString(),
    headerHex,
    likelyEncrypted: true,
  };
}

function analyzeSaveFile(filePath, { stringLimit = 40 } = {}) {
  const inspection = inspectSaveFile(filePath);
  if (!inspection.ok) return inspection;

  try {
    const sample = readSaveSample(filePath);
    if (!sample) {
      return { ok: false, error: 'Could not read save file.' };
    }

    const ascii = extractAsciiStrings(sample.buf);
    const utf16 = extractUtf16Strings(sample.buf);
    const strings = [...new Set([...ascii, ...utf16])];
    const schools = findSchoolNames(strings);
    const coachName = guessCoachName(strings);
    const seasonYear = guessSeasonYear(strings);

    const interesting = strings
      .filter((s) => s.length >= 6 && /[A-Za-z]{3,}/.test(s))
      .slice(0, stringLimit);

    return {
      ok: true,
      inspection,
      analysis: {
        bytesSampled: sample.sizeRead,
        stringCount: strings.length,
        schoolsFound: schools,
        coachName: coachName || null,
        seasonYear,
        sampleStrings: interesting,
      },
    };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

module.exports = {
  scanSaveFolders,
  listSavFiles,
  inspectSaveFile,
  analyzeSaveFile,
};
