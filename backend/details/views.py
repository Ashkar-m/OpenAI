from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import CustomUser
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication

# Register API
class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login API
class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Get User API (Protected)
class UserView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Implimentation of Chat by using Hugging face
import requests
from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view

HUGGINGFACE_API_KEY = "your_huggingface_api_key"

@api_view(["POST"])
def chat_with_ai(request):
    user_input = request.data.get("prompt")
    
    if not user_input:
        return Response({"error": "Prompt is required"}, status=400)

    headers = {"Authorization": f"Bearer {HUGGINGFACE_API_KEY}"}
    payload = {"inputs": user_input}

    response = requests.post(
        "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
        headers=headers,
        json=payload
    )

    result = response.json()
    return Response({"response": result.get("generated_text", "No response")})
