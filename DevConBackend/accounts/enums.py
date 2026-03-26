from django.db.models import TextChoices
from django.utils.translation import gettext_lazy as _

class ReasonsForJoining(TextChoices):
    SELECT = ('select', _('Select a reason')),
    NETWORKING = ('network', _('Networking with developers')),
    LEARNING = ('learning', _('Learning a new skill')),
    COLLABORATION = ('collaboration', _('collaborating on projects')),