from django.urls import path
from .views import AdminContentView

urlpatterns = [
    path('admin/content/', AdminContentView.as_view(), name='admin-content'),
]
