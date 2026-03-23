from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .models import Case
from .serializers import CaseSerializer


class CaseListView(ListAPIView):
    """Public endpoint — returns all cases ordered."""
    queryset = Case.objects.all()
    serializer_class = CaseSerializer
    permission_classes = [AllowAny]


class AdminCaseListCreateView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get(self, request):
        cases = Case.objects.all()
        serializer = CaseSerializer(cases, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminCaseDetailView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get_object(self, pk):
        try:
            return Case.objects.get(pk=pk)
        except Case.DoesNotExist:
            return None

    def get(self, request, pk):
        case = self.get_object(pk)
        if not case:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(CaseSerializer(case).data)

    def put(self, request, pk):
        case = self.get_object(pk)
        if not case:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = CaseSerializer(case, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        case = self.get_object(pk)
        if not case:
            return Response(status=status.HTTP_404_NOT_FOUND)
        case.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
