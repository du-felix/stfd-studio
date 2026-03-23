from django.urls import path
from .views import CaseListView, AdminCaseListCreateView, AdminCaseDetailView

urlpatterns = [
    path('cases/', CaseListView.as_view(), name='case-list'),
    path('admin/cases/', AdminCaseListCreateView.as_view(), name='admin-case-list-create'),
    path('admin/cases/<int:pk>/', AdminCaseDetailView.as_view(), name='admin-case-detail'),
]
