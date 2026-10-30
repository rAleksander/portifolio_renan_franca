@echo off
title Iniciar Portfolio Cinematografico - Renan Aleksander
echo ========================================================
echo   Iniciando Portfolio Cinematografico (Frontend Vite)
echo ========================================================
echo.
cd /d "%~dp0frontend"
start http://localhost:5173
npm run dev
pause
