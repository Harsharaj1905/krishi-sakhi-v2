@echo off
echo ========================================
echo   Krishi Sakhi V2 - Start All Servers
echo ========================================
echo.

REM Check if we're in the right directory
if not exist "backend\manage.py" (
    echo Error: Please run this script from the project root directory
    pause
    exit /b 1
)

if not exist "frontend\package.json" (
    echo Error: Please run this script from the project root directory
    pause
    exit /b 1
)

echo Starting Backend Server in a new window...
start "Krishi Sakhi Backend" cmd /k "cd backend && (if not exist venv (py -3.12 -m venv venv)) && venv\Scripts\activate && pip install -r requirements.txt --quiet && python manage.py migrate && python manage.py runserver"

echo Waiting 10 seconds for backend to start...
timeout /t 10 /nobreak > nul

echo Starting Frontend Server in a new window...
start "Krishi Sakhi Frontend" cmd /k "cd frontend && (if not exist node_modules (npm install)) && npm run dev"

echo.
echo ========================================
echo   Both Servers Starting...
echo ========================================
echo.
echo Backend:  http://127.0.0.1:8000
echo Frontend: http://localhost:5173
echo.
echo IMPORTANT: Add your Gemini API key in backend\.env
echo   Get it from: https://makersuite.google.com/app/apikey
echo.
echo Press any key to open the frontend in your browser...
pause > nul
start http://localhost:5173
