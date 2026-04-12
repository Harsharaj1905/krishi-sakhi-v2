import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        try {
          const response = await axios.post(`${API_BASE_URL}/token/refresh/`, { refresh: refreshToken });
          const { access } = response.data;
          localStorage.setItem('access_token', access);
          originalRequest.headers.Authorization = `Bearer ${access}`;
          return api(originalRequest);
        } catch {
          localStorage.removeItem('access_token');
          localStorage.removeItem('refresh_token');
          window.location.reload();
        }
      }
    }
    return Promise.reject(error);
  }
);

// Authentication APIs
export const authAPI = {
  login: async (credentials) => {
    const response = await api.post('/login/', credentials);
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
    }
    return response;
  },
  register: async (userData) => {
    const response = await api.post('/register/', userData);
    return response;
  },
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },
  getToken: () => localStorage.getItem('access_token'),
};

// Farm APIs
export const farmAPI = {
  getAll: () => api.get('/farms/'),
  create: (data) => api.post('/farms/', data),
  getById: (id) => api.get(`/farms/${id}/`),
  update: (id, data) => api.put(`/farms/${id}/`, data),
  delete: (id) => api.delete(`/farms/${id}/`),
};

// Crop Recommendation APIs
export const cropAPI = {
  recommendFromLocation: async (locationData) => {
    const response = await api.post('/recommend-from-location/', locationData);
    return response;
  },
  recommend: async (data) => {
    const response = await api.post('/recommend/', data);
    return response;
  },
};

// Disease Detection APIs
export const diseaseAPI = {
  predict: async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    const response = await api.post('/predict-disease-v2/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },
};

// AI Assistant API
export const assistantAPI = {
  chat: async (message) => {
    const response = await api.post('/assistant/', { message });
    return response;
  },
};

export default api;
