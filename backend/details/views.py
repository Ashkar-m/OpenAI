from django.shortcuts import render

from django.http import HttpResponse
from django.contrib.auth.models import User 
from django.contrib.auth import authenticate 
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status


def hello(request):
    return HttpResponse("Hello")


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }

@api_view(["POST"])
def register(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)



@api_view(["POST"])
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    user = authenticate(username=username, password=password)

    if user is not None:
        tokens = get_tokens_for_user(user)
        return Response({"token": tokens["access"], "refresh":tokens["refresh"], "username": user.username})
    
    return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)