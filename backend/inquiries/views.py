from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Inquiry
from .serializers import InquirySerializer


class InquiryCreateView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = InquirySerializer(data=request.data)
        if serializer.is_valid():
            inquiry = serializer.save()
            return Response(
                {'message': 'Inquiry received', 'id': inquiry.id},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminInquiryListView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = InquirySerializer
    queryset = Inquiry.objects.all()

    def get_serializer_class(self):
        return InquirySerializer


class AdminInquiryUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, pk):
        try:
            inquiry = Inquiry.objects.get(pk=pk)
        except Inquiry.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        allowed = ['status']
        data = {k: v for k, v in request.data.items() if k in allowed}
        for key, val in data.items():
            setattr(inquiry, key, val)
        inquiry.save()
        return Response(InquirySerializer(inquiry).data)
