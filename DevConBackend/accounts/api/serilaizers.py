from rest_framework import serializers
from accounts.models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)
    
    class Meta: 
        model = User
        fields = [
            'fullname', 
            'email', 
            'reason_for_joining', 
            'select_reason', 
            'password', 
            'password2'
        ]
    
    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        validated_data.pop('password2')
        password = validated_data.pop('password')

        user = User(**validated_data)
        user.set_password(password)  # 🔥 IMPORTANT
        user.save()
        return user