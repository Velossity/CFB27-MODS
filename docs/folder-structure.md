# Folder structure

## Your desktop layout

Everything lives under one folder on your desktop. **Each mod gets its own subfolder.**

```
Desktop\CFB27-Mods\
├── _template\              # Copy this when starting a new mod
├── 2007-throwback\         # example mod (your choice of names)
├── springfield-state\      # another mod
├── tools\                  # shared utilities (save inspector, etc.)
├── assets\                 # shared logos, references
├── docs\                   # notes and guides
├── scripts\                # helpers (e.g. new-mod.ps1)
├── README.md
└── package.json
```

This folder is also your **git repo** — clone or init GitHub here so pushes sync your mods and tools together.

## Rules

1. **One folder = one mod** — do not mix two mods in the same directory
2. **Tracker stays separate** — `CFB TRACKER` / `CFB27TRACKER` repo is not inside `CFB27-Mods`
3. **Shared stuff at root** — only `tools/`, `assets/`, `docs/`, `scripts/` are shared; mod-specific files stay in that mod's folder
4. **Name mods clearly** — e.g. `2007-throwback`, `sec-alternate-unis`, `custom-portal-teams`

## Start a new mod

From `Desktop\CFB27-Mods`:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\new-mod.ps1 -Name "my-mod-name"
```

Or manually:

```powershell
xcopy /E /I _template my-mod-name
```

Then open `my-mod-name\README.md` and fill in install steps and status.

## Open in Cursor

Open **`Desktop\CFB27-Mods`** as the workspace root (not the tracker project). Agents will see all mods plus shared tools, but each mod remains isolated in its own folder.
