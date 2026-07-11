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

Write-Host "Created mod folder: $dest"
Write-Host "Edit README.md and add your mod files there."
