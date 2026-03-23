from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Inquiry
from .serializers import InquirySerializer

class InquiryCreateView(APIView):
    def post(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Inquiry received. We will be in touch within 24 hours.', 'id': serializer.data['id']},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
