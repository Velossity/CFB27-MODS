# Getting started with CFB27 modding

## Keep projects separate

| Project | Where | Purpose |
|---------|-------|---------|
| **Tracker** | `CFB27TRACKER` / CFB TRACKER app | Dynasty tracking only |
| **Frosty / MMC mods** | This repo (`CFB27-Mods` / `CFB27-MODS`) | `.fbmod` packs for MMC Mod Manager |
| **Team Builder** | `Desktop\Teambuilder Stuff` + in-game | Official custom programs |

Open this mods repo in Cursor for Frosty work. Open the tracker separately for the dynasty app.

## Day-to-day Frosty workflow

1. Browse the mods repo → open a **mod folder**
2. Open that folder’s **`mods\`** directory
3. In **MMC Mod Manager** (Admin): **Add Mod** → pick the `.fbmod` → enable → **Apply** → **Launch**

Full setup: [frosty-mmc.md](frosty-mmc.md)

## Desktop layout

```
Desktop\
  CFB27-Mods\
    CFB27-MODS\          ← repo (until you flatten)
      _template\
      example-frosty-mod\
      my-mod-a\
        mods\            ← import these into MMC
      tools\
      docs\
  MMC_Modding_Tools_v1.1.0.0\
  Teambuilder Stuff\
  CFB TRACKER\           ← separate project
```

## What you can mod today

### Frosty / MMC (primary for this repo)

- **Play:** MMC Mod Manager + `.fbmod` from each mod’s `mods\` folder
- **Create:** MMC Editor → export `.fbmod` → drop into `your-mod\mods\`
- One-time anti-cheat launcher swap required — see [frosty-mmc.md](frosty-mmc.md)

### Team Builder (official — separate from Frosty)

1. Create on the Team Builder website
2. Download from **Download Center** inside CFB27
3. Use in Dynasty or other modes

Keep Team Builder assets in `Desktop\Teambuilder Stuff`, not mixed into Frosty `mods\` folders unless you document why.

### Save files (research / backup)

```
Documents\College Football 27\Saves\
```

The `save-inspector` tool can list metadata and extract readable strings. It does **not** decrypt or patch saves. Always back up first.

## Suggested first steps

1. Finish MMC one-time setup ([frosty-mmc.md](frosty-mmc.md))
2. Open `example-frosty-mod\` to see the expected folder layout
3. Run `scripts\new-mod.ps1 -Name "my-first-mod"` and drop a `.fbmod` into `mods\`
4. Import via MMC Mod Manager and test **offline**

## Safety

- Back up saves and the stock anti-cheat launcher before installing tools
- Prefer offline dynasty for testing
- Never use mods online
- Never commit real `.sav` files (`.gitignore` blocks them)
