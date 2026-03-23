from django.urls import path
from .views import AdminTeamListView, AdminTeamDetailView

urlpatterns = [
    path('admin/team/', AdminTeamListView.as_view(), name='admin-team-list'),
    path('admin/team/<int:pk>/', AdminTeamDetailView.as_view(), name='admin-team-detail'),
]
