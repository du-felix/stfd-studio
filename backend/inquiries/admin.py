from django.contrib import admin
from .models import Inquiry

@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'email', 'package', 'status', 'created_at']
    list_filter = ['package', 'status', 'source']
    search_fields = ['name', 'company', 'email']
    readonly_fields = ['created_at', 'updated_at']
    ordering = ['-created_at']
