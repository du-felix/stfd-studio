from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import PageContent
from .serializers import PageContentSerializer

# Default content blocks — seeded on first request if empty
DEFAULT_CONTENT = [
    # Home
    {'page': 'home', 'key': 'hero_title', 'label': 'Hero title', 'value': 'Your web identity.\nTransformed in a week.'},
    {'page': 'home', 'key': 'hero_subtitle', 'label': 'Hero subtitle', 'value': 'We design and build high-converting websites for ambitious founders. Brand-first, AI-accelerated, delivered in 7 days.'},
    {'page': 'home', 'key': 'cta_title', 'label': 'CTA headline', 'value': "Let's build your web identity."},
    {'page': 'home', 'key': 'cta_subtitle', 'label': 'CTA subtext', 'value': 'We take on a limited number of projects each month. Book your spot now.'},
    # About
    {'page': 'about', 'key': 'hero_title', 'label': 'Hero title', 'value': 'We build web identities that mean something.'},
    {'page': 'about', 'key': 'hero_subtitle', 'label': 'Hero subtitle', 'value': 'stfd studio is a boutique design studio specializing in web identity — the intersection of brand, design, and engineering.'},
    {'page': 'about', 'key': 'mission_title', 'label': 'Mission title', 'value': 'Fast delivery. Uncompromising craft.'},
    {'page': 'about', 'key': 'mission_body', 'label': 'Mission body', 'value': "We believe great design shouldn't take months. We've built a process that delivers agency-quality work in one week."},
    # Pricing
    {'page': 'pricing', 'key': 'hero_title', 'label': 'Hero title', 'value': 'Transparent pricing.\nNo surprises.'},
    {'page': 'pricing', 'key': 'hero_subtitle', 'label': 'Hero subtitle', 'value': 'Fixed scope. Fixed timeline. Fixed price. Pick the package that fits your stage.'},
]


def seed_content():
    for item in DEFAULT_CONTENT:
        PageContent.objects.get_or_create(
            page=item['page'], key=item['key'],
            defaults={'label': item['label'], 'value': item['value']}
        )


class AdminContentView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        seed_content()
        items = PageContent.objects.all()
        return Response(PageContentSerializer(items, many=True).data)

    def put(self, request):
        """Bulk update: expects list of {id, value}"""
        updates = request.data if isinstance(request.data, list) else []
        for item in updates:
            try:
                obj = PageContent.objects.get(id=item['id'])
                obj.value = item.get('value', obj.value)
                obj.save()
            except PageContent.DoesNotExist:
                pass
        items = PageContent.objects.all()
        return Response(PageContentSerializer(items, many=True).data)
