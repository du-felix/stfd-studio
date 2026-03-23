from rest_framework import serializers
from .models import TeamMember

class TeamMemberSerializer(serializers.ModelSerializer):
    photo_url = serializers.ReadOnlyField()

    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'role', 'bio', 'photo', 'photo_url', 'order', 'updated_at']
        read_only_fields = ['id', 'photo_url', 'updated_at']
        extra_kwargs = {'photo': {'write_only': True, 'required': False}}
