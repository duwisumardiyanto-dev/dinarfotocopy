# DINAR Fotocopy - Start Development Server
# PowerShell script untuk menjalankan localhost dengan mudah

Write-Host "🚀 Starting DINAR Fotocopy Web App..." -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
$nodeVersion = node --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Node.js tidak ditemukan!" -ForegroundColor Red
    Write-Host "   Install Node.js dari: https://nodejs.org" -ForegroundColor Yellow
    pause
    exit 1
}

Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
Write-Host ""

# Default port
$port = 3000

# Check if port is already in use
$portInUse = netstat -ano | findstr ":$port"
if ($portInUse) {
    Write-Host "⚠️  Port $port sudah digunakan. Mencoba port 8080..." -ForegroundColor Yellow
    $port = 8080
}

Write-Host "📂 Directory: $PWD" -ForegroundColor Cyan
Write-Host "🌐 Starting server on port $port..." -ForegroundColor Cyan
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host ""

# Start the server
npx -y serve -l $port

# This line will only execute if server stops
Write-Host ""
Write-Host "🛑 Server stopped." -ForegroundColor Red
pause
