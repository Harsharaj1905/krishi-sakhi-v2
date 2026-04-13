@echo off
echo ========================================
echo   Krishi Sakhi Frontend Setup
echo ========================================
echo.

cd frontend

echo Installing npm dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed. Make sure Node.js is installed.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Frontend Setup Complete!
echo ========================================
echo.
echo Starting Vite development server...
echo Frontend will run at: http://localhost:5173
echo.
echo Make sure the backend server is running at http://127.0.0.1:8000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev
