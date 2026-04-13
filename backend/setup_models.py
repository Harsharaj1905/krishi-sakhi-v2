import pickle
import numpy as np

# Function to generate mock ML model data

def generate_ml_model_data():
    # Mock data for multicrop doctor
    model_data = np.random.rand(10, 10)  # Dummy model data
    return model_data

# Generate and save the models and class names
if __name__ == '__main__':
    # Generate model data
    model_data = generate_ml_model_data()

    # Save the models
    with open('multicrop_doctor_v2.h5', 'wb') as file:
        file.write(model_data.tobytes())  # Saving as raw bytes, not a real H5 format

    # Save class names
    class_names = ['Crop1', 'Crop2', 'Crop3']
    with open('multicrop_class_names_v2.pkl', 'wb') as file:
        pickle.dump(class_names, file)

    # Save crop recommender
    crop_recommender = {'Crop1': 'Recommendation1', 'Crop2': 'Recommendation2'}
    with open('crop_recommender_v2.pkl', 'wb') as file:
        pickle.dump(crop_recommender, file)