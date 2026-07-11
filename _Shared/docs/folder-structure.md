# Folder structure

## Browse path

```
Desktop\CFB27-Mods\     ← open this (repo root)
```

Mod folders sit at the root so you can open CFB27-Mods and immediately pick a mod.

## Layout

```
Desktop\CFB27-Mods\
├── HOW TO USE.txt
├── Open MMC Mod Manager.lnk
├── example-frosty-mod\          # MOD
│   ├── README.md
│   ├── mods\                    # .fbmod → MMC Add Mod
│   ├── source\
│   └── assets\
├── my-other-mod\                # another MOD
├── _template\                   # starter (not a playable mod)
└── _Shared\                     # workspace helpers (not mods)
    ├── docs\
    ├── scripts\new-mod.ps1
    ├── tools\
    └── assets\
```

## Rules

1. **One folder = one mod** at the root of `CFB27-Mods`
2. **Frosty-ready files live in that mod’s `mods\`**
3. **Ignore `_Shared` and `_template` when picking something to install**
4. Tracker and Team Builder stay outside this folder
5. Name mods clearly — e.g. `2007-throwback`, `sec-alternate-unis`

## Start a new mod

```powershell
cd $env:USERPROFILE\Desktop\CFB27-Mods
powershell -ExecutionPolicy Bypass -File _Shared\scripts\new-mod.ps1 -Name "my-mod-name"
```
