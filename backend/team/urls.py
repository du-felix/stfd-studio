from django.urls import path
from .views import AdminTeamListView, AdminTeamDetailView, PublicTeamListView

urlpatterns = [
    path('team/', PublicTeamListView.as_view(), name='public-team-list'),
    path('admin/team/', AdminTeamListView.as_view(), name='admin-team-list'),
    path('admin/team/<int:pk>/', AdminTeamDetailView.as_view(), name='admin-team-detail'),
]
