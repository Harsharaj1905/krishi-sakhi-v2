# Krishi Sakhi V2 - Troubleshooting Guide

## Pillow Installation Fails

**Error:**
```
ERROR: Failed to build 'Pillow' when getting requirements to build wheel
KeyError: '__version__'
```

**Cause:** Pillow 10.2.0 is not compatible with Python 3.13.

**Fix:** Use Python 3.12 to create the virtual environment:

```bash
rmdir /s /q venv
py -3.12 -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Or upgrade Pillow after activating the venv:

```bash
pip install --upgrade pillow
pip install -r requirements.txt
```

---

## TensorFlow Not Installed (Python 3.13)

**Message:** `Ignoring tensorflow: markers 'python_version < "3.13"' don't match your environment`

**Cause:** TensorFlow does not officially support Python 3.13.

**Fix (Option A):** Switch to Python 3.12 — all features including TensorFlow will work.

**Fix (Option B):** If staying on Python 3.13, the Crop Doctor feature (disease detection) won't be available. All other features (Magic Map, AI Assistant, authentication) work fine.

---

## Python 3.12 Not Found

**Error:** `Python 3.12 is not recognized as an internal or external command`

**Fix:**

1. Download Python 3.12 from [python.org](https://www.python.org/downloads/release/python-3120/).
2. During installation, check **"Add Python to PATH"**.
3. Restart your terminal and try again.

Verify the installation:
```bash
py -3.12 --version
```

---

## Port 8000 Already in Use

**Error:** `Error: That port is already in use.`

**Fix:**

```bash
# Find and kill the process using port 8000
netstat -ano | findstr :8000
taskkill /PID <PID_NUMBER> /F
```

Or start Django on a different port:
```bash
python manage.py runserver 8001
```

Then update `frontend/.env`:
```env
VITE_API_URL=http://127.0.0.1:8001/api
```

---

## Port 5173 Already in Use

**Message:** `Port 5173 is in use, trying another one...`

Vite will automatically try port 5174. Open [http://localhost:5174](http://localhost:5174) in your browser.

---

## npm install Fails

**Fix:**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## CORS Errors in Browser Console

**Error:** `Access to fetch at 'http://127.0.0.1:8000' from origin 'http://localhost:5173' has been blocked by CORS policy`

**Fix:** Ensure `django-cors-headers` is installed and `settings.py` has:

```python
INSTALLED_APPS = [
    ...
    'corsheaders',
    ...
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Must be at the top
    ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]
```

---

## Gemini AI Assistant Not Working

**Error:** `Invalid API key` or `AI response failed`

**Fix:**

1. Get a free API key from [Google AI Studio](https://makersuite.google.com/app/apikey).
2. Open `backend/.env` and replace:
   ```env
   GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
   ```
   with your actual key:
   ```env
   GEMINI_API_KEY=AIza...your-actual-key...
   ```
3. Restart the backend server.

---

## Database Migration Errors

**Error:** `django.db.utils.OperationalError: no such table`

**Fix:**

```bash
cd backend
venv\Scripts\activate
python manage.py makemigrations
python manage.py migrate
```

To reset the database entirely:

```bash
del db.sqlite3
python manage.py migrate
```

---

## ModuleNotFoundError on Startup

**Error:** `ModuleNotFoundError: No module named 'django'`

**Fix:** Your virtual environment is not activated.

```bash
cd backend
venv\Scripts\activate   # Windows
# source venv/bin/activate  # Mac/Linux
python manage.py runserver
```

---

## See Also

- [SETUP_GUIDE.md](SETUP_GUIDE.md) — Full setup instructions
