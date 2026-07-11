# Getting started with CFB27 modding

## Keep projects separate

- **Tracker** — `CFB27TRACKER` repo / CFB27 Tracker app only
- **Mods** — `Desktop\CFB27-Mods` — [Velossity/CFB27-MODS](https://github.com/Velossity/CFB27-MODS) — one subfolder per mod

Open `Desktop\CFB27-Mods` in Cursor for modding work. Open the tracker project separately for dynasty app work.

## Desktop layout

```
Desktop\CFB27-Mods\
  _template\
  my-mod-a\
  my-mod-b\
  tools\
  assets\
  docs\
```

Every CFB27 mod you build gets its own folder. Shared tools and docs stay at the root.

## What you can mod today

### Team Builder (official)

EA's Team Builder lets you create custom programs with logos, uniforms, stadiums, and rosters. Flow:

1. Create on the Team Builder website
2. Download from **Download Center** inside CFB27
3. Use in Dynasty or other modes

Good for: fictional schools, alternate uniforms, full custom programs.

### Save files (research / backup)

Saves live under:

```
Documents\College Football 27\Saves\
```

Extensions seen: `.sav`, `.bin`, `.mc02`

Saves appear **encrypted**. The `save-inspector` tool in this repo can:

- List save files and metadata (size, modified date)
- Dump header bytes
- Extract readable ASCII/UTF-16 strings (school names, years, etc.)

It does **not** decrypt or patch saves yet. Always copy saves to a backup folder before experiments.

### Visual / roster mods (community)

PC release enabled a modding scene, but public tooling is still catching up. Typical workflow emerging:

1. Document target files and formats
2. Build or adopt extraction/packing tools
3. Ship mods as versioned folders with install instructions
4. Test only on offline saves

Use `_template` or `scripts\new-mod.ps1` when starting a new project.

## Suggested first experiments

1. **Save inspector** — run on your dynasty save, note what strings appear
2. **Custom team** — build one Team Builder school and document the export/import steps
3. **Asset pack** — collect logos/uniform references under `assets/` for a future mod
4. **Throwback roster mod** — run `new-mod.ps1 -Name "2007-throwback"` and plan roster + branding there

## Safety

- Back up saves and game folders before installing anything
- Prefer offline dynasty for testing
- Never commit real `.sav` files to git (`.gitignore` blocks them)
