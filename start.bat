@echo off
echo ========================================
echo   Krishi Sakhi V2.0 - Startup Script
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

echo [1/4] Setting up Backend...
cd backend

REM Check if virtual environment exists
if not exist "venv\Scripts\activate.bat" (
    echo Creating virtual environment...
    python -m venv venv
)

echo Activating virtual environment...
call venv\Scripts\activate.bat

REM Install Python dependencies
echo Installing Python dependencies...
pip install -r requirements.txt --quiet

REM Run migrations
echo Running database migrations...
python manage.py migrate

echo.
echo [2/4] Starting Backend Server...
echo Backend will run on: http://127.0.0.1:8000
echo.

REM Start Django in a new window
start "Krishi Sakhi Backend" cmd /k "cd backend && venv\Scripts\activate && python manage.py runserver"

cd ..

echo.
echo [3/4] Setting up Frontend...
cd frontend

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing Node dependencies...
    call npm install
)

echo.
echo [4/4] Starting Frontend Server...
echo Frontend will run on: http://localhost:5173
echo.

REM Start Vite dev server
start "Krishi Sakhi Frontend" cmd /k "cd frontend && npm run dev"

cd ..

echo.
echo ========================================
echo   Servers Starting...
echo ========================================
echo.
echo Backend:  http://127.0.0.1:8000
echo Frontend: http://localhost:5173
echo.
echo IMPORTANT: Update your Gemini API key in:
echo   backend\.env  or  backend\krishi_sakhi\settings.py
echo.
echo Press any key to view the frontend in your browser...
pause > nul
start http://localhost:5173
