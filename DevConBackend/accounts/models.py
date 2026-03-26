from typing import ClassVar
from django.db import models
from django.contrib.auth.models import AbstractUser
#from accounts.enums import ReasonsForJoining
from django.utils.translation import gettext_lazy as _
from django.urls import reverse
from accounts.managers import UserManager

# Create your models here.
ReasonsForJoining = [
    ('select', _('Select a reason')),
    ('network', _('Networking with developers')),
    ('learning', _('Learning a new skill')),
    ('collaboration', _('collaborating on projects')),
]


class User(AbstractUser):
    first_name = None
    last_name = None
    username = None
    fullname = models.CharField(_('username'), max_length=220)
    email = models.EmailField(max_length=240, unique=True)
    reason_for_joining = models.CharField(_('reason_for_joining'), max_length=250)
    select_reason = models.CharField(max_length=23, choices=ReasonsForJoining, default='select')

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects: ClassVar[UserManager] = UserManager()

    def get_absolute_url(self) -> str:
        """Get URL for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"pk": self.id})

