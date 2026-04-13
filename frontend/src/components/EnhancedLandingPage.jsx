import React, { useState } from 'react';
import axios from 'axios';

const EnhancedLandingPage = () => {
    const [diseasePrediction, setDiseasePrediction] = useState('');
    const [cropRecommendation, setCropRecommendation] = useState('');
    const [assistantResponse, setAssistantResponse] = useState('');
    const [location, setLocation] = useState('');
    const [inputData, setInputData] = useState('');

    const handlePredictDisease = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/predict-disease-v2/', { data: inputData });
            setDiseasePrediction(response.data.prediction);
        } catch (error) {
            console.error('Error predicting disease:', error);
        }
    };

    const handleRecommendCrop = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/recommend-from-location/?location=${location}`);
            setCropRecommendation(response.data.recommendation);
        } catch (error) {
            console.error('Error recommending crop:', error);
        }
    };

    const handleAskAssistant = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/assistant/', { query: inputData });
            setAssistantResponse(response.data.answer);
        } catch (error) {
            console.error('Error interacting with assistant:', error);
        }
    };

    return (
        <div>
            <h2>Disease Detection</h2>
            <input type='text' value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder='Enter data for prediction'/>
            <button onClick={handlePredictDisease}>Predict Disease</button>
            <p>Prediction: {diseasePrediction}</p>

            <h2>Crop Recommendation</h2>
            <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Enter location'/> 
            <button onClick={handleRecommendCrop}>Recommend Crop</button>
            <p>Recommendation: {cropRecommendation}</p>

            <h2>AI Assistant</h2>
            <button onClick={handleAskAssistant}>Ask Assistant</button>
            <p>Assistant Response: {assistantResponse}</p>
        </div>
    );
};

export default EnhancedLandingPage;