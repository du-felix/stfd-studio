from rest_framework.generics import ListAPIView
from .models import Case
from .serializers import CaseSerializer

class CaseListView(ListAPIView):
    queryset = Case.objects.all()
    serializer_class = CaseSerializer
