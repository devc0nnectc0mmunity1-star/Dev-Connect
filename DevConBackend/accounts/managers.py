from django.contrib.auth.models import UserManager as DjangoUserManager
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password

class UserManager(DjangoUserManager):
    def _create_user(self, email: str, password: str| None, **extra_fields):
        if email is None:
            msg = "email field must not be empty"
            raise ValidationError(msg)
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.password = make_password(password)
        user.save(using=self._db)
        return user
    
    def create_user(self, email: str, password: str | None=None, **extra_fields):
        """
        creates a custom user without staff or admin privileges,
        with the given email and password.
        """
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        
        return self._create_user(email, password, **extra_fields)
    
    def create_superuser(self, email: str, password: str | None=None, **extra_fields):
        """
        creates a superuser with admin and staff privileges,
        with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(email, password, **extra_fields)
    
    def testing(self, email: str, *args: list, **kwargs: dict):
        """
        creates a testing user with the given email.
        """
        return self._create_user(email, None, **kwargs)
