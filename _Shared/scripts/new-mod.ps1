param(
    [Parameter(Mandatory = $true)]
    [string]$Name
)

$ErrorActionPreference = 'Stop'
# scripts live in _Shared\scripts — repo root is two levels up
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$template = Join-Path $root '_template'
$dest = Join-Path $root $Name

if (-not (Test-Path $template)) {
    Write-Error "Template folder not found: $template"
}

if (Test-Path $dest) {
    Write-Error "Mod folder already exists: $dest"
}

$reserved = @('_Shared', '_template', '.cursor', '.git')
if ($reserved -contains $Name) {
    Write-Error "That name is reserved for workspace folders."
}

Copy-Item -Path $template -Destination $dest -Recurse
$readme = Join-Path $dest 'README.md'
(Get-Content $readme -Raw) -replace 'your-mod-name', $Name | Set-Content $readme -NoNewline

foreach ($sub in @('mods', 'source', 'assets')) {
    $dir = Join-Path $dest $sub
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }
}

Write-Host "Created mod folder: $dest"
Write-Host "Put finished .fbmod files in: $(Join-Path $dest 'mods')"
Write-Host "Then double-click 'Open MMC Mod Manager' in CFB27-Mods -> Add Mod -> Apply -> Launch"
Write-Host "Edit README.md with install notes for this mod."
