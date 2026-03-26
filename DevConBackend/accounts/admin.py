from django.contrib import admin
from accounts.models import User
from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.utils.translation import gettext_lazy as _

from accounts.forms import AdminChangeForm
from accounts.forms import AdminCreationForm


# Register your models here.

@admin.register(User)
class UserAdmin(DjangoUserAdmin):
    form = AdminChangeForm
    add_form = AdminCreationForm
    fieldsets= (
        (_('update_fields'), {'fields': ('email', 'password')}),
        (_('personal info'), {'fields': ('name',)}),
        (
            _('permissions'),
            {
                'fields': (
                    'is_active', 
                    'is_superuser', 
                    'is_staff', 
                    'groups', 
                    'user_permissions'
                )
            }
        ),
        (_('important_dates'), {'fields': ('last_login', 'date_joined')}),
    )
    list_display = ['email', 'fullname', 'is_superuser']
    search = ['fullname']
    ordering = ['id']
    add_fieldsets = (
    (
        _('signup_fields'), 
        {
            "classes": ('wide',),
            "fields": ('email', 'password1', 'password2')
        }
    ),
)