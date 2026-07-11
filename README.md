# CFB27 Mods

Modding workspace for **EA Sports College Football 27** — tools, experiments, and mod projects.

**Desktop folder:** `Desktop\CFB27-Mods`  
**Each mod:** its own subfolder inside that directory.

This is **completely separate** from [CFB27 Tracker](https://github.com/Velossity/CFB27TRACKER).

## Folder layout

```
Desktop\CFB27-Mods\
├── _template\            # Starter files — copy for each new mod
├── your-mod-name\        # One folder per mod (you add these)
├── tools\                # Shared scripts (save inspector, etc.)
├── assets\               # Shared logos, references
├── docs\                 # Notes and guides
└── scripts\              # Helpers (new-mod.ps1)
```

See [docs/folder-structure.md](docs/folder-structure.md) for the full convention.

## Quick start

### 1. Clone into your desktop folder

```powershell
cd $env:USERPROFILE\Desktop
git clone https://github.com/Velossity/CFB27-MODS.git CFB27-Mods
cd CFB27-Mods
```

GitHub repo: [Velossity/CFB27-MODS](https://github.com/Velossity/CFB27-MODS)

### 2. Create a new mod folder

```powershell
powershell -ExecutionPolicy Bypass -File scripts\new-mod.ps1 -Name "my-first-mod"
```

### 3. Shared tools (optional)

```powershell
npm install
npm run scan-saves
```

### 4. Inspect a save file

```powershell
node tools\save-inspector\cli.js "C:\Users\You\Documents\College Football 27\Saves\your-save.sav"
```

## Tracker vs Mods

| | CFB27 Tracker | CFB27-Mods (desktop) |
|---|---------------|----------------------|
| Location | Separate repo / app | `Desktop\CFB27-Mods` |
| Purpose | Dynasty tracking | Game mods & tools |
| Structure | One app | One folder per mod |

Do not put tracker code in `CFB27-Mods` or mod folders in the tracker repo.
