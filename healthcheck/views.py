from rest_framework.decorators import api_view
from rest_framework.response import Response
from todos.models import Todo


@api_view(['GET'])
def health_check(request):
    todo_count = Todo.objects.count()
    return Response({
        'status': 'running',
        'todo_count': todo_count
    })
