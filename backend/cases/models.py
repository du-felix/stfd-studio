from django.db import models

class Case(models.Model):
    title = models.CharField(max_length=200)
    client = models.CharField(max_length=200)
    project_type = models.CharField(max_length=100)
    year = models.IntegerField()
    description = models.TextField(blank=True, default='')
    image_url = models.URLField(blank=True, default='')
    image = models.ImageField(upload_to='cases/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', '-year']

    def __str__(self):
        return f"{self.client} — {self.project_type} ({self.year})"

    @property
    def display_image(self):
        if self.image:
            return self.image.url
        return self.image_url
