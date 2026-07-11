# Install mods with Frosty / MMC Mod Manager

CFB27 on PC uses **MMC** tools built on the Frosty pipeline. You **play** with mods via **MMC Mod Manager**; you **create/edit** with **MMC Editor**.

Official tool pack on your PC (example):

```
Desktop\MMC_Modding_Tools_v1.1.0.0\
├── ReadMe.txt
├── AC_(PUT IN CFB27 or M27 FOLDER)\   # replacement anti-cheat launcher
├── MMC_ModManager_v1.1.0.0\           # play with mods
└── MMC_Editor_v1.1.0.0\               # create/edit mods
```

Community: [CFMC Discord](https://discord.gg/cfmc) · [MMC Discord](https://discord.gg/maddenmoddingcommunity)

**Do not use mods in online play** (Online Dynasty / Franchise). MMC/CFMC rules forbid it.

---

## One-time game setup

1. Extract `MMC_Modding_Tools_v1.1.0.0.rar` if you have not already (same drive as the game is recommended).
2. Open your CFB27 install folder (typical):

   ```
   C:\Program Files\EA Games\EA SPORTS College Football 27\
   ```

   or Steam:

   ```
   C:\Program Files (x86)\Steam\steamapps\common\EA SPORTS College Football 27\
   ```

3. Rename the stock launcher:

   `EAAntiCheat.GameServiceLauncher.exe` → `_EAAntiCheat.GameServiceLauncher.exe`

4. Copy the modded launcher from:

   `MMC_Modding_Tools_v1.1.0.0\AC_(PUT IN CFB27 or M27 FOLDER)\EAAntiCheat.GameServiceLauncher.exe`

   into the game folder.

5. Run **MMC Mod Manager** and **MMC Editor** as Administrator (exe → Properties → Compatibility → Run as administrator).

### Restore stock game (for online)

1. Delete the modded `EAAntiCheat.GameServiceLauncher.exe`.
2. Rename `_EAAntiCheat.GameServiceLauncher.exe` back.
3. If `CryptBase.dll` exists in the game folder, delete it before going online.

---

## Day-to-day: add a mod from this workspace

1. Open **this mods repo** (browse path may be `Desktop\CFB27-Mods\CFB27-MODS`).
2. Open the **mod folder** you want (e.g. `example-frosty-mod`).
3. Open its **`mods\`** subfolder — that is where Frosty-ready files live (`.fbmod`).
4. Launch **MMC Mod Manager** as Admin.
5. Click **Add Mod**.
6. Browse to that `mods\` folder and select the `.fbmod` (or mod pack the Manager accepts).
7. Check the mod in the list so it is enabled.
8. Click **Apply**.
9. Click **Launch**.

### Where files go in a mod folder

| Path | What belongs there |
|------|--------------------|
| `your-mod\mods\` | Finished `.fbmod` / packs — **import these** |
| `your-mod\source\` | MMC Editor projects, WIP exports |
| `your-mod\assets\` | Textures, logos, references for this mod only |
| `your-mod\README.md` | Install notes, game version, credits |

---

## Creating mods (MMC Editor)

1. Launch **MMC Editor** as Administrator.
2. Open / edit game files for your change.
3. Export or save as a Frosty mod (`.fbmod`).
4. Copy the finished `.fbmod` into `your-mod-name\mods\`.
5. Document install steps in that mod’s `README.md`.
6. Test offline only via Mod Manager → Apply → Launch.

---

## Troubleshooting

- Always run Manager/Editor **as Administrator**.
- Confirm the anti-cheat launcher swap is still in place after game updates.
- Prefer offline Dynasty for testing.
- Back up saves before applying new mods.
- Ask in CFMC Discord troubleshooting channels if Apply/Launch fails.
