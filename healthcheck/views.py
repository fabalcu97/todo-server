from rest_framework.viewsets import ViewSet
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from todos.models import Todo


class HealthCheckView(ViewSet):
    permission_classes = [AllowAny]
    http_method_names = ["get"]

    def list(self, request):
        todo_count = Todo.objects.count()
        return Response({"status": "running", "todo_count": todo_count})
