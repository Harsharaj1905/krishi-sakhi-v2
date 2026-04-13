"""
setup_models.py  –  Krishi Sakhi V2.0
======================================
Run this script from the `backend/` directory to create the ML model files
required by the application.

Usage:
    python setup_models.py

Requirements:
    pip install scikit-learn numpy pandas pillow

TensorFlow is NOT required for this script.  It creates:
  • ml_models/crop_recommender_v2.pkl   – Random Forest crop recommender
  • ml_models/multicrop_class_names_v2.pkl – Disease class labels

TensorFlow model (optional, for full Crop Doctor accuracy):
  TensorFlow only supports Python 3.10–3.12 (not 3.13+).  If you have an
  eligible Python version, install TensorFlow first:

      pip install tensorflow==2.16.1

  Then re-run this script. Building the model downloads ~14 MB of ImageNet
  weights the first time – an internet connection is required for that step.

  On Python 3.13+ the app automatically falls back to the built-in
  SimpleDiseaseDetector which does not need TensorFlow.
"""

import os
import pickle
import numpy as np

# ─── Output directory ─────────────────────────────────────────────────────────
ML_DIR = os.path.join(os.path.dirname(__file__), 'ml_models')
os.makedirs(ML_DIR, exist_ok=True)

print("=" * 60)
print("Krishi Sakhi V2.0 – Model Setup")
print("=" * 60)

# ─── 1. Disease class names ───────────────────────────────────────────────────
DISEASE_CLASSES = [
    'Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot',
    'Corn_(maize)___Common_rust_',
    'Corn_(maize)___Northern_Leaf_Blight',
    'Corn_(maize)___healthy',
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy',
    'Tomato___Bacterial_spot',
    'Tomato___Early_blight',
    'Tomato___Late_blight',
    'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot',
    'Tomato___Spider_mites Two-spotted_spider_mite',
    'Tomato___Target_Spot',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
    'Tomato___Tomato_mosaic_virus',
    'Tomato___healthy',
]

classes_path = os.path.join(ML_DIR, 'multicrop_class_names_v2.pkl')
with open(classes_path, 'wb') as f:
    pickle.dump(DISEASE_CLASSES, f)
print(f"[OK] Class names saved  → {classes_path}  ({len(DISEASE_CLASSES)} classes)")

# ─── 2. Crop recommender (Random Forest) ─────────────────────────────────────
try:
    from sklearn.ensemble import RandomForestClassifier
    import pandas as pd

    # Representative training data: N, P, K, temperature, humidity, pH, rainfall
    records = [
        # Tomato
        (100, 50, 30, 25, 75, 6.5, 150, 'Tomato'),
        (95,  48, 28, 24, 78, 6.4, 145, 'Tomato'),
        (105, 52, 32, 26, 72, 6.6, 155, 'Tomato'),
        # Potato
        (90,  60, 40, 22, 70, 6.0, 120, 'Potato'),
        (85,  58, 38, 21, 68, 5.9, 115, 'Potato'),
        (92,  62, 42, 23, 72, 6.1, 125, 'Potato'),
        # Maize / Corn
        (120, 40, 20, 28, 60, 7.0, 180, 'Maize'),
        (115, 38, 18, 27, 58, 6.9, 175, 'Maize'),
        (125, 42, 22, 29, 62, 7.1, 185, 'Maize'),
        # Wheat
        (80,  45, 35, 20, 80, 6.5, 100, 'Wheat'),
        (78,  43, 33, 19, 82, 6.4,  95, 'Wheat'),
        (82,  47, 37, 21, 78, 6.6, 105, 'Wheat'),
        # Rice
        (110, 55, 25, 26, 65, 6.8, 160, 'Rice'),
        (108, 53, 23, 25, 63, 6.7, 155, 'Rice'),
        (112, 57, 27, 27, 67, 6.9, 165, 'Rice'),
    ]

    cols = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall', 'label']
    df = pd.DataFrame(records, columns=cols)

    X = df.drop('label', axis=1).values
    y = df['label'].values

    # Repeat data to give the forest enough samples
    X = np.tile(X, (10, 1))
    y = np.tile(y, 10)

    clf = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
    clf.fit(X, y)

    recommender_path = os.path.join(ML_DIR, 'crop_recommender_v2.pkl')
    with open(recommender_path, 'wb') as f:
        pickle.dump(clf, f)
    print(f"[OK] Crop recommender saved → {recommender_path}")

except ImportError as e:
    print(f"[SKIP] scikit-learn not available ({e}). Crop recommender not created.")

# ─── 3. TensorFlow disease model (optional) ──────────────────────────────────
h5_path = os.path.join(ML_DIR, 'multicrop_doctor_v2.h5')
if os.path.exists(h5_path):
    print(f"[OK] TensorFlow model already present → {h5_path}")
else:
    try:
        from tensorflow.keras.models import Sequential
        from tensorflow.keras.layers import Dense, Dropout, GlobalAveragePooling2D
        from tensorflow.keras.applications import MobileNetV2
        from tensorflow.keras.optimizers import Adam

        print("Building MobileNetV2 transfer-learning model …")
        print("(Downloading ImageNet weights ~14 MB – internet required for first run)")
        base = MobileNetV2(input_shape=(224, 224, 3), include_top=False, weights='imagenet')
        base.trainable = False

        model = Sequential([
            base,
            GlobalAveragePooling2D(),
            Dense(256, activation='relu'),
            Dropout(0.3),
            Dense(128, activation='relu'),
            Dropout(0.2),
            Dense(len(DISEASE_CLASSES), activation='softmax'),
        ])
        model.compile(optimizer=Adam(1e-3), loss='categorical_crossentropy', metrics=['accuracy'])
        model.save(h5_path)
        print(f"[OK] TensorFlow model saved  → {h5_path}")

    except Exception as tf_err:
        print(f"[INFO] TensorFlow not available ({tf_err}).")
        print("       The app will use the built-in SimpleDiseaseDetector fallback.")
        print("       To use the real model, install Python 3.10–3.12 and run:")
        print("           pip install tensorflow==2.16.1")
        print("           python setup_models.py")

# ─── Summary ──────────────────────────────────────────────────────────────────
print()
print("=" * 60)
print("Files in ml_models/:")
for fname in sorted(os.listdir(ML_DIR)):
    fpath = os.path.join(ML_DIR, fname)
    size_kb = os.path.getsize(fpath) // 1024
    print(f"   {fname}  ({size_kb} KB)")
print("=" * 60)
print("Setup complete. You can now run:  python manage.py runserver")
