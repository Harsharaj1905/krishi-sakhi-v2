# Krishi Sakhi V2 - Setup Guide

## Prerequisites

- **Python 3.10–3.12** (recommended: Python 3.12) — [Download](https://www.python.org/downloads/)
- **Node.js 18+** — [Download](https://nodejs.org/)
- **Git** — [Download](https://git-scm.com/)
- **Gemini API Key** — [Get one free](https://makersuite.google.com/app/apikey)

> ⚠️ **Python 3.13 is not fully supported** due to TensorFlow compatibility. Use Python 3.12 for full functionality.

---

## Quick Start (Windows — Recommended)

### Option 1: One-Click Setup

1. Double-click **`start-all.bat`** in the project root.
2. Two terminal windows open — one for backend, one for frontend.
3. Open your browser: [http://localhost:5173](http://localhost:5173)

### Option 2: Separate Setup Scripts

1. Double-click **`setup-backend.bat`** → Wait for "Starting development server..."
2. Double-click **`setup-frontend.bat`** → Wait for "Local: http://localhost:5173/"
3. Open your browser: [http://localhost:5173](http://localhost:5173)

---

## Manual Setup

### Backend

```bash
cd backend

# Remove old venv (if any)
rmdir /s /q venv          # Windows
# rm -rf venv             # Mac/Linux

# Create virtual environment with Python 3.12
py -3.12 -m venv venv     # Windows
# python3.12 -m venv venv # Mac/Linux

# Activate virtual environment
venv\Scripts\activate     # Windows
# source venv/bin/activate # Mac/Linux

# Upgrade pip
python -m pip install --upgrade pip

# Install dependencies
pip install -r requirements.txt

# Run database migrations
python manage.py makemigrations
python manage.py migrate

# Start backend server
python manage.py runserver
```

Backend is now running at: [http://127.0.0.1:8000](http://127.0.0.1:8000)

### Frontend

Open a **new terminal**:

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend is now running at: [http://localhost:5173](http://localhost:5173)

---

## Environment Configuration

### Backend (`backend/.env`)

```env
DJANGO_DEBUG=True
SECRET_KEY=django-insecure-your-secret-key-for-v2
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
DATABASE_URL=sqlite:///db.sqlite3
```

Replace `YOUR_GEMINI_API_KEY_HERE` with your actual key from [Google AI Studio](https://makersuite.google.com/app/apikey).

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

---

## Features

| Feature | Description | URL |
|---|---|---|
| Landing Page | Project overview | http://localhost:5173 |
| Magic Map | AI crop recommendations by location | http://localhost:5173/map |
| Crop Doctor | Plant disease detection from photo | http://localhost:5173/doctor |
| AI Assistant | Farming Q&A powered by Gemini | http://localhost:5173/assistant |
| Admin Panel | Django admin interface | http://127.0.0.1:8000/admin |
| API | REST API endpoints | http://127.0.0.1:8000/api |

---

## Creating an Admin Account

```bash
cd backend
venv\Scripts\activate   # Windows
python manage.py createsuperuser
```

---

## Verifying Everything Works

1. Backend health check: [http://127.0.0.1:8000/api/](http://127.0.0.1:8000/api/)
2. Frontend: [http://localhost:5173](http://localhost:5173)
3. Create a user account via the signup page
4. Test Magic Map by clicking on the Karnataka map
5. Test Crop Doctor by uploading a leaf image
6. Test AI Assistant by typing a farming question

---

## See Also

- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) — Common issues and solutions
