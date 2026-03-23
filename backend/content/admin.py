from django.contrib import admin
from .models import PageContent

@admin.register(PageContent)
class PageContentAdmin(admin.ModelAdmin):
    list_display = ['page', 'key', 'label', 'updated_at']
    list_filter = ['page']
