# Example Frosty MMC mod (empty sample)

This folder shows the layout every Frosty/MMC mod in this workspace should follow. It has **no** real `.fbmod` yet — copy it or run `_Shared\scripts\new-mod.ps1` for a real project.

## Layout

```
example-frosty-mod\
├── README.md
├── mods\       ← put .fbmod here, then Add Mod in MMC Mod Manager
├── source\     ← MMC Editor WIP
└── assets\     ← art for this mod only
```

## Install (when you add a .fbmod)

1. Back up your dynasty save
2. Open **MMC Mod Manager** as Administrator
3. **Add Mod** → browse to this folder’s `mods\` directory
4. Select the `.fbmod` → enable → **Apply** → **Launch**

Full guide: [_Shared/docs/frosty-mmc.md](../_Shared/docs/frosty-mmc.md)

## Type

`frosty-fbmod`

## Status

- [x] Sample folder structure
- [ ] Real `.fbmod` added to `mods\`
- [ ] Tested in-game (offline)
