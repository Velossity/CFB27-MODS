param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$template = Join-Path $root '_template'
$dest = Join-Path $root $Name

if (-not (Test-Path $template)) {
    Write-Error "Template folder not found: $template"
}

if (Test-Path $dest) {
    Write-Error "Mod folder already exists: $dest"
}

Copy-Item -Path $template -Destination $dest -Recurse
$readme = Join-Path $dest 'README.md'
(Get-Content $readme -Raw) -replace 'your-mod-name', $Name | Set-Content $readme -NoNewline

# Ensure Frosty MMC folders exist even if template copy missed empties
foreach ($sub in @('mods', 'source', 'assets')) {
    $dir = Join-Path $dest $sub
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }
}

Write-Host "Created mod folder: $dest"
Write-Host "Put finished .fbmod files in: $(Join-Path $dest 'mods')"
Write-Host "Then in MMC Mod Manager: Add Mod -> select the .fbmod -> Apply -> Launch"
Write-Host "Edit README.md with install notes for this mod."
