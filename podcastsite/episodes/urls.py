from rest_framework.routers import DefaultRouter
from .views import EpisodeViewSet

router = DefaultRouter()
router.register(r'episodes', EpisodeViewSet)

urlpatterns = router.urls