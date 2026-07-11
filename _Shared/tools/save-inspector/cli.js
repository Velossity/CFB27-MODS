#!/usr/bin/env node
'use strict';

const path = require('path');
const { scanSaveFolders, analyzeSaveFile } = require('./index');

function printUsage() {
  console.log(`
CFB27 Save Inspector

Usage:
  node tools/save-inspector/cli.js              Scan default save folder
  node tools/save-inspector/cli.js --scan       Same as above
  node tools/save-inspector/cli.js <file.sav>   Analyze one save file
  node tools/save-inspector/cli.js --json <file>  JSON output
`);
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

function runScan() {
  const folders = scanSaveFolders();
  for (const folder of folders) {
    console.log(`\n${folder.game}`);
    console.log(`  Path: ${folder.savesPath}`);
    console.log(`  Exists: ${folder.exists ? 'yes' : 'no'}`);
    if (!folder.files.length) {
      console.log('  Saves: (none found)');
      continue;
    }
    console.log(`  Saves: ${folder.files.length}`);
    for (const file of folder.files.slice(0, 10)) {
      console.log(`    - ${file.name}  ${formatBytes(file.size)}  ${file.modified || ''}`);
    }
    if (folder.files.length > 10) {
      console.log(`    ... and ${folder.files.length - 10} more`);
    }
  }
  console.log('');
}

function runAnalyze(filePath, asJson) {
  const resolved = path.resolve(filePath);
  const result = analyzeSaveFile(resolved);

  if (asJson) {
    console.log(JSON.stringify(result, null, 2));
    return;
  }

  if (!result.ok) {
    console.error('Error:', result.error);
    process.exit(1);
  }

  const { inspection, analysis } = result;
  console.log('\nCFB27 Save Analysis');
  console.log('===================');
  console.log(`File:     ${inspection.fileName}`);
  console.log(`Path:     ${inspection.filePath}`);
  console.log(`Size:     ${formatBytes(inspection.size)}`);
  console.log(`Modified: ${inspection.modified}`);
  console.log(`Header:   ${inspection.headerHex}`);
  console.log(`Encrypted: likely yes (full parse not available)`);
  console.log('');
  console.log('Detected metadata (best effort):');
  console.log(`  Schools:  ${analysis.schoolsFound.length ? analysis.schoolsFound.join(', ') : '(none)'}`);
  console.log(`  Coach:    ${analysis.coachName || '(none)'}`);
  console.log(`  Season:   ${analysis.seasonYear || '(none)'}`);
  console.log(`  Strings:  ${analysis.stringCount} readable fragments (showing up to ${analysis.sampleStrings.length})`);
  for (const s of analysis.sampleStrings) {
    console.log(`    · ${s}`);
  }
  console.log('');
}

const args = process.argv.slice(2);
if (!args.length || args.includes('--help') || args.includes('-h')) {
  printUsage();
  process.exit(0);
}

if (args.includes('--scan') || (args.length === 1 && args[0] === '--scan')) {
  runScan();
  process.exit(0);
}

const jsonFlag = args.includes('--json');
const fileArg = args.find((a) => !a.startsWith('-'));

if (!fileArg) {
  runScan();
  process.exit(0);
}

runAnalyze(fileArg, jsonFlag);
