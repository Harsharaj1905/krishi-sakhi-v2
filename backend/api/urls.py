from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (
    LoginView,
    FarmListCreateView,
    FarmDetailView,
    RecommendFromLocationView,
    MultiCropDiseasePredictionView,
    AIAssistantView,
    register_user,
)

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('register/', register_user, name='register'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('farms/', FarmListCreateView.as_view(), name='farm-list-create'),
    path('farms/<int:pk>/', FarmDetailView.as_view(), name='farm-detail'),
    path('recommend-from-location/', RecommendFromLocationView.as_view(), name='recommend-from-location'),
    path('predict-disease-v2/', MultiCropDiseasePredictionView.as_view(), name='predict-disease-v2'),
    path('assistant/', AIAssistantView.as_view(), name='ai-assistant'),
]