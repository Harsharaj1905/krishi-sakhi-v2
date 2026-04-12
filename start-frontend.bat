@echo off
echo ========================================
echo   Krishi Sakhi Frontend Server
echo ========================================
echo.

cd frontend

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing Node dependencies...
    call npm install
)

echo Starting Vite development server...
echo.
echo Frontend will run at: http://localhost:5173
echo.
echo Make sure the backend server is running!
echo Backend: http://127.0.0.1:8000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev
