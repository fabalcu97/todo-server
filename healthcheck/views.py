from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from todos.models import Todo


class HealthCheckView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        todo_count = Todo.objects.count()
        return Response({"status": "running", "todo_count": todo_count})
