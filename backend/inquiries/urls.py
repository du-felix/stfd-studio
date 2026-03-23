from django.urls import path
from .views import InquiryCreateView, AdminInquiryListView, AdminInquiryUpdateView

urlpatterns = [
    path('inquiries/', InquiryCreateView.as_view(), name='inquiry-create'),
    path('admin/inquiries/', AdminInquiryListView.as_view(), name='admin-inquiry-list'),
    path('admin/inquiries/<int:pk>/', AdminInquiryUpdateView.as_view(), name='admin-inquiry-update'),
]
