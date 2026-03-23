from django.db import models
from django.utils.text import slugify

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
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    accent_color = models.CharField(max_length=20, default='#C8FF00')
    url = models.URLField(blank=True, default='')
    has_cover = models.BooleanField(default=False)
    cover_image = models.ImageField(upload_to='cases/covers/', blank=True, null=True)
    brief_headline = models.CharField(max_length=500, blank=True, default='')
    brief_body = models.TextField(blank=True, default='')
    approach_headline = models.CharField(max_length=500, blank=True, default='')
    approach_body = models.TextField(blank=True, default='')
    outcomes = models.JSONField(default=list, blank=True)
    scope = models.JSONField(default=list, blank=True)
    tags = models.JSONField(default=list, blank=True)
    testimonial_quote = models.TextField(blank=True, default='')
    testimonial_author = models.CharField(max_length=200, blank=True, default='')
    testimonial_role = models.CharField(max_length=200, blank=True, default='')
    highlights = models.JSONField(default=list, blank=True)

    class Meta:
        ordering = ['order', '-year']

    def __str__(self):
        return f"{self.client} — {self.project_type} ({self.year})"

    def save(self, *args, **kwargs):
        if not self.slug and self.title:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    @property
    def display_image(self):
        if self.image:
            return self.image.url
        return self.image_url
