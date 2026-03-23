from rest_framework import serializers
from .models import Inquiry

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = ['id', 'name', 'company', 'email', 'website', 'package', 'brief', 'source', 'status', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at', 'status']
