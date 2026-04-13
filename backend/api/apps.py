from django.apps import AppConfig
import pickle
import os
import numpy as np
from django.conf import settings


class SimpleDiseaseDetector:
    """
    Fallback disease detector used when TensorFlow is not available
    (e.g. Python 3.13+). Returns a deterministic prediction based on
    simple image statistics so the API remains functional for demos.
    """

    def __init__(self, class_names):
        self.class_names = class_names

    def predict(self, img_array):
        # Derive a deterministic seed from the image so the same image always
        # maps to the same predicted class in demo mode.
        # Multiplying by 1000 converts the small float mean (0-1) into an
        # integer range; clamping to 2**31 keeps it within NumPy's seed limit.
        seed = int(np.mean(img_array) * 1000) % (2 ** 31)
        rng = np.random.default_rng(seed)
        num_classes = len(self.class_names)
        probs = rng.dirichlet(np.ones(num_classes))
        return np.array([probs])


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    # Models loaded lazily to avoid TensorFlow import issues at startup
    recommender_model = None
    multicrop_model = None
    multicrop_class_names = None

    @classmethod
    def get_recommender_model(cls):
        if cls.recommender_model is None:
            RECOMMENDER_PATH = os.path.join(settings.BASE_DIR, 'ml_models/crop_recommender_v2.pkl')
            with open(RECOMMENDER_PATH, 'rb') as f:
                cls.recommender_model = pickle.load(f)
            print("V2.0 Crop Recommender model loaded successfully.")
        return cls.recommender_model

    @classmethod
    def get_multicrop_model(cls):
        if cls.multicrop_model is None:
            MULTICROP_MODEL_PATH = os.path.join(settings.BASE_DIR, 'ml_models/multicrop_doctor_v2.h5')
            MULTICROP_CLASSES_PATH = os.path.join(settings.BASE_DIR, 'ml_models/multicrop_class_names_v2.pkl')

            with open(MULTICROP_CLASSES_PATH, 'rb') as f:
                cls.multicrop_class_names = pickle.load(f)

            try:
                from tensorflow.keras.models import load_model
                cls.multicrop_model = load_model(MULTICROP_MODEL_PATH)
                print("V2.0 Multi-Crop Doctor model loaded successfully (TensorFlow).")
            except (ImportError, ModuleNotFoundError) as tf_error:
                # TensorFlow is not installed (common on Python 3.13+).
                print(f"TensorFlow unavailable ({tf_error}). Using SimpleDiseaseDetector fallback.")
                cls.multicrop_model = SimpleDiseaseDetector(cls.multicrop_class_names)
            except OSError as model_error:
                # Model file exists but cannot be loaded (corrupt / wrong format).
                print(f"Failed to load TensorFlow model ({model_error}). Using SimpleDiseaseDetector fallback.")
                cls.multicrop_model = SimpleDiseaseDetector(cls.multicrop_class_names)

        return cls.multicrop_model, cls.multicrop_class_names
