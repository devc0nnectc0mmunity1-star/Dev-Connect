from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status 
from drf_spectacular.utils import extend_schema
from accounts.api.serilaizers import UserSerializer
from accounts.models import User


# Create your views here.

class UserAccountViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset= User.objects.all() 
    
    @extend_schema(
            request=UserSerializer,
            responses={201: 'Created'}
    )
    def create_account(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    