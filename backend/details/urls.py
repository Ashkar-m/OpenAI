from django.urls import path
from .views import RegisterView,LoginView,chat_with_ai

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('api/chat/', chat_with_ai.as_view(), name='chat_with_ai'),
]