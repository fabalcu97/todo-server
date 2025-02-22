from django.db import models


class Todo(models.Model):
    class Status(models.TextChoices):
        TODO = "TODO", "Todo"
        IN_PROGRESS = "IN_PROGRESS", "In Progress"
        DONE = "DONE", "Done"

    name = models.CharField(max_length=255, null=False)  # Required name
    status = models.CharField(
        max_length=20, choices=Status.choices, default=Status.TODO, null=False
    )  # Required status
    # Optional description
    description = models.TextField(blank=True, null=True)
    # Required priority
    priority = models.IntegerField(null=False)
    order_number = models.IntegerField(null=True, blank=True)  # Optional order number
    created_at = models.DateTimeField(
        auto_now_add=True
    )  # Automatically set on creation
    updated_at = models.DateTimeField(
        auto_now=True
    )  # Automatically updated on modification

    def __str__(self):
        return self.name
