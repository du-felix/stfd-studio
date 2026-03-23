from rest_framework import serializers
from .models import Case

class CaseSerializer(serializers.ModelSerializer):
    display_image = serializers.ReadOnlyField()

    class Meta:
        model = Case
        fields = ['id', 'title', 'client', 'project_type', 'year', 'description', 'display_image', 'is_featured', 'order']
