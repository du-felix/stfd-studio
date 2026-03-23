from django.contrib import admin
from .models import Case

@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    list_display = ['client', 'project_type', 'year', 'is_featured', 'order']
    list_filter = ['year', 'is_featured']
    list_editable = ['order', 'is_featured']
    search_fields = ['client', 'title', 'project_type']
