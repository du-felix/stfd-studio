from django.db import models

class PageContent(models.Model):
    page = models.CharField(max_length=100)  # 'home', 'about', 'pricing'
    key = models.CharField(max_length=200)   # 'hero_title', 'hero_subtitle', etc.
    label = models.CharField(max_length=200, blank=True, default='')
    value = models.TextField(blank=True, default='')
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = [('page', 'key')]
        ordering = ['page', 'key']

    def __str__(self):
        return f"{self.page}.{self.key}"
