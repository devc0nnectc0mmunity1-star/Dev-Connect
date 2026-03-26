from rest_framework.routers import SimpleRouter
from accounts.views import UserAccountViewSet

router = SimpleRouter()
router.register("users", UserAccountViewSet)


app_name = "api"
urlpatterns = router.urls

