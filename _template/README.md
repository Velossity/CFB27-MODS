# Mod template (Frosty / MMC)

Copy this folder (or run `scripts\new-mod.ps1`) and fill in the sections below.

## Mod name

`your-mod-name`

## Type

Pick one: `frosty-fbmod` | `roster` | `uniforms` | `textures` | `tool` | `other`

## Description

What does this mod do? (1–3 sentences)

## Target game version

CFB27 build / patch tested against: `unknown`

## Folder layout

```
your-mod-name\
├── README.md      ← this file
├── mods\          ← put finished .fbmod / packs HERE (import into MMC)
├── source\        ← MMC Editor projects / WIP
└── assets\        ← logos, textures, references for this mod
```

## Install (Frosty MMC)

1. Back up your dynasty save
2. Open **MMC Mod Manager** as Administrator
3. Click **Add Mod**
4. Browse to this folder’s **`mods\`** directory
5. Select the `.fbmod` file(s)
6. Enable the mod in the list → **Apply** → **Launch**

See repo guide: [docs/frosty-mmc.md](../docs/frosty-mmc.md)

## Uninstall

1. Open MMC Mod Manager
2. Disable or remove this mod from the list
3. **Apply** again (or restore stock anti-cheat launcher if leaving modding entirely)

## Files

| File | Location | Purpose |
|------|----------|---------|
| `something.fbmod` | `mods\` | Import into MMC Mod Manager |

## Status

- [ ] Planning
- [ ] In progress (Editor / source)
- [ ] `.fbmod` exported to `mods\`
- [ ] Tested in-game (offline)
- [ ] Published

## Notes

Research, Discord links, blockers, credits.
