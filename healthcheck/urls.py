from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import HealthCheckView

router = DefaultRouter()
router.register(r"", HealthCheckView.as_view(), basename="health_check")
