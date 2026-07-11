# Getting started with CFB27 modding

## Keep projects separate

| Project | Where | Purpose |
|---------|-------|---------|
| **Tracker** | `CFB TRACKER` / CFB27TRACKER | Dynasty tracking only |
| **Frosty / MMC mods** | `Desktop\CFB27-Mods` | `.fbmod` packs for MMC Mod Manager |
| **Team Builder** | `Desktop\Teambuilder Stuff` | Official custom programs |

## Day-to-day Frosty workflow

1. Open **`Desktop\CFB27-Mods`** → open a **mod folder**
2. Open that folder’s **`mods\`** directory
3. Double-click **Open MMC Mod Manager** (Admin) → **Add Mod** → `.fbmod` → **Apply** → **Launch**

Or read `HOW TO USE.txt` in the CFB27-Mods folder.

Full setup: [frosty-mmc.md](frosty-mmc.md)

## Desktop layout

```
Desktop\
  CFB27-Mods\                 ← open this
    HOW TO USE.txt
    Open MMC Mod Manager.lnk
    example-frosty-mod\       ← mod folders at root
      mods\                   ← import these into MMC
    _template\
    _Shared\                  ← docs / scripts / tools
  MMC_Modding_Tools_v1.1.0.0\
  Teambuilder Stuff\
  CFB TRACKER\                ← separate
```

## What you can mod today

### Frosty / MMC (primary for this repo)

Create or download `.fbmod` packs → drop into a mod’s `mods\` folder → load in MMC Mod Manager. Offline only.

### Team Builder (official)

Custom programs via EA’s web tool + in-game Download Center. Keep assets in `Teambuilder Stuff`, not as Frosty mods unless you build a separate `.fbmod`.

### Save inspection

```powershell
cd $env:USERPROFILE\Desktop\CFB27-Mods
node _Shared\tools\save-inspector\cli.js --scan
```

## Create a new mod

```powershell
cd $env:USERPROFILE\Desktop\CFB27-Mods
powershell -ExecutionPolicy Bypass -File _Shared\scripts\new-mod.ps1 -Name "2007-throwback"
```

## Safety

- Back up saves before installing mods
- Prefer offline dynasty for testing
- Never commit `.sav` files
- Restore stock anti-cheat before playing online
