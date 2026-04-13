@echo off
echo ========================================
echo   Krishi Sakhi Backend Setup (Python 3.12)
echo ========================================
echo.

cd backend

REM Remove old venv if exists
if exist "venv" (
    echo Removing old virtual environment...
    rmdir /s /q venv
)

echo Creating virtual environment with Python 3.12...
py -3.12 -m venv venv
if errorlevel 1 (
    echo ERROR: Python 3.12 not found! Please install Python 3.12 from https://www.python.org/downloads/
    pause
    exit /b 1
)

echo Activating virtual environment...
call venv\Scripts\activate.bat

echo Upgrading pip...
python -m pip install --upgrade pip

echo Installing dependencies...
pip install -r requirements.txt
if errorlevel 1 (
    echo Trying to fix Pillow installation...
    pip install --upgrade pillow
    pip install -r requirements.txt
)

echo Running database migrations...
python manage.py makemigrations
python manage.py migrate

echo.
echo ========================================
echo   Backend Setup Complete!
echo ========================================
echo.
echo Starting Django development server...
echo API available at: http://127.0.0.1:8000/api
echo Admin panel at:   http://127.0.0.1:8000/admin
echo.
echo Press Ctrl+C to stop the server
echo.

python manage.py runserver
