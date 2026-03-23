from django.db import models

class TeamMember(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    bio = models.TextField(blank=True, default='')
    photo = models.ImageField(upload_to='team/', blank=True, null=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name

    @property
    def photo_url(self):
        if self.photo:
            return self.photo.url
        return None
