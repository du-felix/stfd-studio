from django.core.management.base import BaseCommand
from cases.models import Case

SAMPLE_CASES = [
    {
        'client': 'Meridian Co.',
        'title': 'Brand Identity & Web Presence',
        'project_type': 'Brand + Website',
        'year': 2025,
        'image_url': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
        'is_featured': True,
        'order': 1,
    },
    {
        'client': 'Opus Digital',
        'title': 'High-Converting Landing Page',
        'project_type': 'Landing Page',
        'year': 2025,
        'image_url': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
        'is_featured': True,
        'order': 2,
    },
    {
        'client': 'Arklight',
        'title': 'Visual Brand System',
        'project_type': 'Brand Identity',
        'year': 2024,
        'image_url': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600',
        'is_featured': False,
        'order': 3,
    },
    {
        'client': 'Vanta Works',
        'title': 'Full Website Redesign',
        'project_type': 'Website Redesign',
        'year': 2024,
        'image_url': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
        'is_featured': False,
        'order': 4,
    },
    {
        'client': 'Helios Studio',
        'title': 'Web Identity Refresh',
        'project_type': 'Website + Branding',
        'year': 2024,
        'image_url': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
        'is_featured': False,
        'order': 5,
    },
    {
        'client': 'Solum Agency',
        'title': 'Lead Generation Landing Page',
        'project_type': 'Landing Page',
        'year': 2024,
        'image_url': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
        'is_featured': False,
        'order': 6,
    },
]

class Command(BaseCommand):
    help = 'Seed the database with sample case studies'

    def handle(self, *args, **options):
        if Case.objects.exists():
            self.stdout.write('Cases already exist, skipping seed.')
            return
        for data in SAMPLE_CASES:
            Case.objects.create(**data)
        self.stdout.write(self.style.SUCCESS(f'Seeded {len(SAMPLE_CASES)} case studies.'))
