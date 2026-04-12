# Krishi Sakhi V2.0 - AI Farming Intelligence

AI-powered precision agriculture platform for Indian farmers, featuring crop recommendation, disease detection, and expert guidance.

## Features

- **Magic Map**: Click anywhere in Karnataka to get AI-powered crop recommendations
- **Multi-Crop Doctor**: Upload leaf photos to detect diseases in Tomato, Potato, and Maize
- **AI Assistant**: Chat with an agricultural expert powered by Google Gemini

## Tech Stack

- **Frontend**: React + Vite + TailwindCSS + Three.js + Leaflet
- **Backend**: Django + Django REST Framework + JWT
- **ML Models**: TensorFlow (MobileNetV2), scikit-learn (Random Forest)
- **AI**: Google Gemini API

## Quick Start

### Prerequisites

- **Node.js 20.19+** (required for Vite 7) and npm
- **Python 3.10 - 3.12** (TensorFlow requires Python < 3.13)
- Google Gemini API Key (get free from https://makersuite.google.com/app/apikey)

### Option 1: One-Click Startup (Windows)

Double-click `start.bat` to run both servers automatically.

### Option 2: Manual Setup

#### 1. Backend Setup

```bash
cd backend

# Create virtual environment (IMPORTANT: Use Python 3.10-3.12)
py -3.11 -m venv venv  # or py -3.10, py -3.12
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# For TensorFlow (if not installed):
pip install tensorflow

# Configure API key - Edit backend/.env or backend/krishi_sakhi/settings.py
# Set GEMINI_API_KEY to your actual key

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Start server
python manage.py runserver
```

Backend runs on: `http://127.0.0.1:8000`

#### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend runs on: `http://localhost:5173`

### 3. API Configuration

Update `backend/krishi_sakhi/settings.py` or `backend/.env`:

```python
GEMINI_API_KEY = 'your-actual-gemini-api-key'
```

## Project Structure

```
krishi-sakhi-v3-final/
├── backend/
│   ├── api/                 # Django app with API endpoints
│   │   ├── views.py         # API views (auth, farms, ML, AI)
│   │   ├── models.py        # Database models
│   │   ├── serializers.py   # DRF serializers
│   │   └── urls.py          # API URL routing
│   ├── krishi_sakhi/        # Django project settings
│   ├── ml_models/           # Pre-trained ML models
│   │   ├── multicrop_doctor_v2.h5
│   │   ├── multicrop_class_names_v2.pkl
│   │   └── crop_recommender_v2.pkl
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── LandingPage.jsx    # Landing page with 3D effects
│   │   ├── services/
│   │   │   └── api.js             # API client
│   │   ├── App.jsx                # Main app component
│   │   └── main.jsx               # Entry point
│   ├── public/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/login/` - User login
- `POST /api/register/` - User registration

### Farm Management
- `GET/POST /api/farms/` - List/create farms
- `GET/PUT/DELETE /api/farms/<id>/` - Farm details

### AI Services
- `POST /api/recommend-from-location/` - Get crop recommendation for location
- `POST /api/predict-disease-v2/` - Diagnose plant disease from image
- `POST /api/assistant/` - Chat with AI agricultural assistant

## Usage

1. **Landing Page**: Visit the beautiful landing page with 3D particle effects
2. **Sign Up/Login**: Create an account or login
3. **Magic Map**: Click on Karnataka map to get crop recommendations
4. **Crop Doctor**: Upload leaf photos for disease diagnosis
5. **AI Assistant**: Ask farming questions in natural language

## Demo Credentials

For testing, you can create a user via the registration form or use Django admin at `/admin/`.

## Troubleshooting

### Backend not responding
- Ensure virtual environment is activated
- Check if server is running: `http://127.0.0.1:8000`
- Verify CORS settings in settings.py

### Frontend build errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node -v` (should be 18+)

### AI Assistant not working
- Verify GEMINI_API_KEY is set correctly
- Check API quota in Google Cloud Console
- Test API key: https://generativelanguage.googleapis.com/v1beta/models

### ML Models not loading
- Ensure TensorFlow 2.16.1 is installed
- Check model files exist in `backend/ml_models/`

## License

Built for Indian farmers. Open source for educational purposes.

## Contact

For questions or contributions, please open an issue on GitHub.
