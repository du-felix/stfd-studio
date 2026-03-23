from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .models import TeamMember
from .serializers import TeamMemberSerializer


class AdminTeamListView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def get(self, request):
        members = TeamMember.objects.all()
        return Response(TeamMemberSerializer(members, many=True).data)

    def post(self, request):
        serializer = TeamMemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminTeamDetailView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def put(self, request, pk):
        try:
            member = TeamMember.objects.get(pk=pk)
        except TeamMember.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = TeamMemberSerializer(member, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
