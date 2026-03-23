from django.urls import path
from .views import CaseListView

urlpatterns = [
    path('', CaseListView.as_view(), name='case-list'),
]
