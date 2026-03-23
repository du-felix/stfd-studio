from django.db import models

class Inquiry(models.Model):
    PACKAGE_CHOICES = [
        ('essential', 'Essential'),
        ('studio', 'Studio'),
        ('brand_plus', 'Brand+'),
        ('unsure', 'Not sure yet'),
    ]
    SOURCE_CHOICES = [
        ('google', 'Google'),
        ('referral', 'Referral'),
        ('social', 'Social Media'),
        ('other', 'Other'),
    ]
    STATUS_CHOICES = [
        ('new', 'New'),
        ('contacted', 'Contacted'),
        ('qualified', 'Qualified'),
        ('closed', 'Closed'),
    ]

    name = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    email = models.EmailField()
    website = models.URLField(blank=True, default='')
    package = models.CharField(max_length=20, choices=PACKAGE_CHOICES, default='unsure')
    brief = models.TextField()
    source = models.CharField(max_length=20, choices=SOURCE_CHOICES, default='other')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = 'inquiries'

    def __str__(self):
        return f"{self.name} — {self.company} ({self.get_package_display()})"
