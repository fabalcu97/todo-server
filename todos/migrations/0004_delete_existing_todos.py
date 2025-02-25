from django.db import migrations


def delete_all_todos(apps, schema_editor):
    Todo = apps.get_model('todos', 'Todo')
    Todo.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0003_todo_status'),
    ]

    operations = [
        migrations.RunPython(delete_all_todos),
    ]
