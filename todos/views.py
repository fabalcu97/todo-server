# Create your views here.
from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    lookup_field = "id"
    
    def get_queryset(self):
        """
        This view should return a list of all the todos
        for the currently authenticated user.
        """
        return Todo.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        """
        Set the user field to the currently authenticated user when creating a todo.
        """
        serializer.save(user=self.request.user)
