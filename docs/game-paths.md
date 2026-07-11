# CFB27 game paths (Windows)

Reference paths for Frosty MMC modding and tooling. Adjust username as needed.

## This mods workspace

Nested clone (current on some PCs):

```
%USERPROFILE%\Desktop\CFB27-Mods\CFB27-MODS\
```

Preferred after flatten / clean clone:

```
%USERPROFILE%\Desktop\CFB27-Mods\
```

Each mod’s importable files:

```
...\your-mod-name\mods\*.fbmod
```

## MMC / Frosty tools (Desktop)

```
%USERPROFILE%\Desktop\MMC_Modding_Tools_v1.1.0.0\
  MMC_ModManager_v1.1.0.0\MMCModManager.exe
  MMC_Editor_v1.1.0.0\MMCEditor.exe
  AC_(PUT IN CFB27 or M27 FOLDER)\EAAntiCheat.GameServiceLauncher.exe
```

## Game install

EA Games (typical):

```
C:\Program Files\EA Games\EA SPORTS College Football 27\
```

Steam (typical):

```
C:\Program Files (x86)\Steam\steamapps\common\EA SPORTS College Football 27\
```

Launcher to rename during mod setup: `EAAntiCheat.GameServiceLauncher.exe`

## Saves

```
%USERPROFILE%\Documents\College Football 27\Saves\
```

Common extensions: `.sav`, `.bin`, `.mc02`

## Tracker (separate — do not use for mods)

```
%USERPROFILE%\Documents\CFB27 Tracker\
  Dynasties\
  Logos\
  Saves\
```

App / repo: Desktop `CFB TRACKER` / GitHub `Velossity/CFB27TRACKER`

## Team Builder assets (separate from Frosty)

```
%USERPROFILE%\Desktop\Teambuilder Stuff\
```

## Backups

Recommended local layout (gitignored):

```
CFB27-MODS/
  game-files/          # optional local mirror — never commit
    saves-backup/
    extracted/
```

Copy saves here before experimental tools or new mod packs.
