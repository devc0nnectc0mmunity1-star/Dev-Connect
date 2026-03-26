from django.contrib.auth import forms as auth_forms
from django.forms import EmailField
from django.utils.translation import gettext_lazy as _
from accounts.models import User


class AdminChangeForm(auth_forms.UserChangeForm):
    """
    Form for user detail (email) update in admin area
    """
    class Meta(auth_forms.UserChangeForm.Meta):
        model = User
        field_classes = {'email': EmailField}
    
class AdminCreationForm(auth_forms.UserCreationForm):
    """
    Form for user creation in admin area
    """
    class Meta(auth_forms.UserCreationForm.Meta):
        model = User
        fields = ['email']
        field_classes ={'email': EmailField}
        error_messages = {
            "email": {"unique": _("This email is already taken")},
        }