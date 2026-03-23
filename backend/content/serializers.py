from rest_framework import serializers
from .models import PageContent

class PageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageContent
        fields = ['id', 'page', 'key', 'label', 'value', 'updated_at']
        read_only_fields = ['id', 'updated_at']
