# CFB27 Mods

Frosty / **MMC** modding workspace for **EA Sports College Football 27**.

**Day-to-day flow:** open this folder → open a mod folder → import the `.fbmod` (or pack) into **MMC Mod Manager** → Apply → Launch.

This is **completely separate** from [CFB27 Tracker](https://github.com/Velossity/CFB27TRACKER).

GitHub: [Velossity/CFB27-MODS](https://github.com/Velossity/CFB27-MODS)

## Browse path (important)

Your desktop shortcut folder may look like:

```
Desktop\CFB27-Mods\CFB27-MODS\    ← actual git repo (open this)
```

That nested `CFB27-Mods\CFB27-MODS` layout happened because the repo was cloned into an existing `CFB27-Mods` folder. **Browse into the inner `CFB27-MODS` folder** for mods, docs, and scripts.

Optional later cleanup (only when you want it): move the inner repo contents up one level, or re-clone:

```powershell
cd $env:USERPROFILE\Desktop
# After backing up / removing the nested copy:
git clone https://github.com/Velossity/CFB27-MODS.git CFB27-Mods
```

## Folder layout

```
CFB27-MODS\   (or Desktop\CFB27-Mods after flattening)
├── _template\                 # Starter — copy for each new mod
├── example-frosty-mod\        # Sample empty Frosty MMC layout
├── your-mod-name\             # One folder per mod
│   ├── README.md              # Install steps for that mod
│   ├── mods\                  # READY TO IMPORT — .fbmod / packs
│   ├── source\                # MMC Editor / work-in-progress
│   └── assets\                # Logos, textures, references for this mod
├── tools\                     # Shared scripts (save inspector, etc.)
├── assets\                    # Shared logos / references
├── docs\                      # Guides (including Frosty MMC install)
└── scripts\                   # Helpers (new-mod.ps1)
```

See [docs/folder-structure.md](docs/folder-structure.md) and [docs/frosty-mmc.md](docs/frosty-mmc.md).

## Quick start — use a mod in Frosty MMC

1. Open **MMC Mod Manager** (`Desktop\MMC_Modding_Tools_v1.1.0.0\MMC_ModManager_v1.1.0.0\MMCModManager.exe`) **as Administrator**.
2. Browse this repo → open the mod folder you want.
3. Open that mod’s **`mods\`** folder (Frosty-ready files live here).
4. In MMC Mod Manager: **Add Mod** → select the `.fbmod` (or pack) → enable it → **Apply**.
5. Click **Launch** to start CFB27 with mods.

Full setup (anti-cheat launcher, Editor vs Manager): [docs/frosty-mmc.md](docs/frosty-mmc.md).

## Create a new mod folder

```powershell
cd $env:USERPROFILE\Desktop\CFB27-Mods\CFB27-MODS
powershell -ExecutionPolicy Bypass -File scripts\new-mod.ps1 -Name "my-first-mod"
```

Put finished `.fbmod` files in `my-first-mod\mods\`. Keep Editor projects and raw assets in `source\` / `assets\`.

## Optional shared tools

```powershell
npm install
npm run scan-saves
node tools\save-inspector\cli.js "C:\Users\You\Documents\College Football 27\Saves\your-save.sav"
```

## Tracker vs Mods vs Team Builder

| | CFB27 Tracker | CFB27-Mods (this repo) | Team Builder |
|---|---------------|------------------------|--------------|
| Location | Separate app/repo | This folder | `Desktop\Teambuilder Stuff` + in-game Download Center |
| Purpose | Dynasty tracking | Frosty/MMC `.fbmod` mods | Official custom programs |
| Install | N/A | MMC Mod Manager → Add Mod | In-game Team Builder |

Do not put tracker code here. Team Builder packs are not Frosty mods — keep them outside this repo unless you document a clear bridge.
