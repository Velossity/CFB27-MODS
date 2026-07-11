# Folder structure

## Browse path

Open the **git repo root** for day-to-day use. If you still have the nested clone:

```
Desktop\CFB27-Mods\CFB27-MODS\     ← open this (repo root)
```

After a clean clone into `Desktop\CFB27-Mods`, that folder *is* the repo root.

Flattening the nested path is optional and recommended when convenient — see the README.

## Layout

```
CFB27-MODS\
├── _template\                 # Copy this when starting a new Frosty MMC mod
├── example-frosty-mod\        # Sample empty layout (shows expected folders)
├── 2007-throwback\            # example — your real mods go here
│   ├── README.md
│   ├── mods\                  # .fbmod files → Add Mod in MMC Mod Manager
│   ├── source\                # Editor / WIP
│   └── assets\                # Mod-specific art
├── tools\                     # shared utilities (save inspector, etc.)
├── assets\                    # shared logos, references
├── docs\                      # notes and guides
├── scripts\                   # helpers (e.g. new-mod.ps1)
├── README.md
└── package.json
```

## Rules

1. **One folder = one mod** — do not mix two mods in the same directory
2. **Frosty-ready files live in `mods\`** — that is what you point MMC Mod Manager at
3. **Tracker stays separate** — `CFB TRACKER` / `CFB27TRACKER` is never inside this repo
4. **Team Builder stays separate** — `Desktop\Teambuilder Stuff` is not a Frosty `.fbmod` workflow
5. **Shared stuff at root only** — `tools/`, `assets/`, `docs/`, `scripts/`, `_template/`
6. **Name mods clearly** — e.g. `2007-throwback`, `sec-alternate-unis`

## Start a new mod

From the repo root:

```powershell
powershell -ExecutionPolicy Bypass -File scripts\new-mod.ps1 -Name "my-mod-name"
```

Or:

```powershell
xcopy /E /I _template my-mod-name
```

Then:

1. Put finished `.fbmod` files in `my-mod-name\mods\`
2. Fill in `my-mod-name\README.md` (especially Install)
3. In MMC Mod Manager: **Add Mod** → select the file from `mods\` → Apply → Launch

## Open in Cursor

Open the **repo root** (`CFB27-MODS` or flattened `CFB27-Mods`) — not the Tracker project.
