@echo off
echo ========================================
echo   Krishi Sakhi Backend Server
echo ========================================
echo.

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
echo Starting Django development server...
echo.
echo API available at: http://127.0.0.1:8000/api
echo Admin panel at:   http://127.0.0.1:8000/admin
echo.
echo Press Ctrl+C to stop the server
echo.

python manage.py runserver
