from django.db import models
from django.contrib.auth.models import User


class Todo(models.Model):
    class Status(models.TextChoices):
        TODO = "TODO", "Todo"
        IN_PROGRESS = "IN_PROGRESS", "In Progress"
        DONE = "DONE", "Done"

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="todos")

    name = models.CharField(max_length=255, null=False)
    status = models.CharField(
        max_length=20, choices=Status.choices, default=Status.TODO, null=False
    )
    description = models.TextField(blank=True, null=True)

    priority = models.IntegerField(null=False)
    order_number = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
