from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('team', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teammember',
            name='photo',
        ),
        migrations.AddField(
            model_name='teammember',
            name='photo_url',
            field=models.URLField(blank=True, default=''),
        ),
    ]
