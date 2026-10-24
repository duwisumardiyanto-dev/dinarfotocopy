@echo off
REM DINAR Fotocopy - Start Development Server (Windows Batch)
REM Double-click file ini untuk menjalankan server

title DINAR Fotocopy - Development Server

echo.
echo ========================================
echo   DINAR Fotocopy Web App
echo   Development Server
echo ========================================
echo.

REM Change to script directory
cd /d "%~dp0"

echo Starting server...
echo.
echo Local:   http://localhost:3000
echo Network: Lihat di terminal setelah server running
echo.
echo Tekan Ctrl+C untuk stop server
echo.

REM Run server
npx -y serve -l 3000

pause
