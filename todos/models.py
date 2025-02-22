from django.db import models


class Todo(models.Model):
    name = models.CharField(max_length=255, null=False)  # Required name
    description = models.TextField(blank=True, null=True)  # Optional description
    priority = models.IntegerField(null=False)  # Required priority
    order_number = models.IntegerField(null=False)  # Required order number
    created_at = models.DateTimeField(
        auto_now_add=True
    )  # Automatically set on creation
    updated_at = models.DateTimeField(
        auto_now=True
    )  # Automatically updated on modification

    def __str__(self):
        return self.name
