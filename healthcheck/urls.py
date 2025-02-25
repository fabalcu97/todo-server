from rest_framework.routers import DefaultRouter

from .views import HealthCheckView

router = DefaultRouter()
router.register(r"", HealthCheckView, basename="health_check")
