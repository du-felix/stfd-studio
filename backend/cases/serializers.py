from rest_framework import serializers
from .models import Case

class CaseSerializer(serializers.ModelSerializer):
    display_image = serializers.ReadOnlyField()

    class Meta:
        model = Case
        fields = [
            'id', 'slug', 'title', 'client', 'project_type', 'year',
            'description', 'display_image', 'cover_image', 'image_url',
            'accent_color', 'url', 'has_cover',
            'brief_headline', 'brief_body',
            'approach_headline', 'approach_body',
            'outcomes', 'scope', 'tags',
            'testimonial_quote', 'testimonial_author', 'testimonial_role',
            'highlights', 'is_featured', 'order', 'created_at',
        ]
        read_only_fields = ['id', 'created_at', 'display_image']
