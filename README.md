# CFB27 Mods

Frosty / **MMC** modding workspace for **EA Sports College Football 27**.

**Browse path:** `Desktop\CFB27-Mods`  
**Flow:** open a **mod folder** → open its **`mods\`** → import `.fbmod` in MMC Mod Manager → Apply → Launch.

Separate from [CFB27 Tracker](https://github.com/Velossity/CFB27TRACKER).  
GitHub: [Velossity/CFB27-MODS](https://github.com/Velossity/CFB27-MODS)

## What you see when you open this folder

```
Desktop\CFB27-Mods\
├── HOW TO USE.txt              ← start here
├── Open MMC Mod Manager.lnk    ← launches MMC
├── example-frosty-mod\         ← a MOD (one folder per mod)
│   └── mods\                   ← .fbmod files go here (import these)
├── _template\                  ← copy / use new-mod.ps1 for new mods
└── _Shared\                    ← docs & tools (not MMC mods)
    ├── docs\
    ├── scripts\
    ├── tools\
    └── assets\
```

Anything that is **not** `_Shared`, `_template`, or a shortcut is a **mod folder**.

## Use a mod

1. Open the mod folder you want (e.g. `example-frosty-mod`)
2. Open **`mods\`**
3. Double-click **Open MMC Mod Manager** (Administrator recommended)
4. **Add Mod** → select the `.fbmod` → enable → **Apply** → **Launch**

One-time MMC setup (anti-cheat launcher): [`_Shared/docs/frosty-mmc.md`](_Shared/docs/frosty-mmc.md)

## Create a new mod

```powershell
cd $env:USERPROFILE\Desktop\CFB27-Mods
powershell -ExecutionPolicy Bypass -File _Shared\scripts\new-mod.ps1 -Name "my-first-mod"
```

Put finished `.fbmod` files in `my-first-mod\mods\`.

## Tracker vs Mods vs Team Builder

| | CFB27 Tracker | CFB27-Mods | Team Builder |
|---|---------------|------------|--------------|
| Location | Separate app | `Desktop\CFB27-Mods` | `Desktop\Teambuilder Stuff` |
| Purpose | Dynasty tracking | Frosty/MMC `.fbmod` | Official custom programs |

Offline only — do not use mods online.
