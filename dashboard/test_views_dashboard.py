"""Dashboard app tests."""
from django.test import TestCase, override_settings


TEST_STORAGES = {
    'default': {
        'BACKEND': 'django.core.files.storage.FileSystemStorage',
    },
    'staticfiles': {
        'BACKEND': 'django.contrib.staticfiles.storage.StaticFilesStorage',
    },
}


@override_settings(STORAGES=TEST_STORAGES, STATIC_ROOT=None)
class TestViews(TestCase):
    """Test views in dashboard app."""

    def test_get_dashboard_page(self):
        """Test get dashboard page view."""
        response = self.client.get('/dashboard/', secure=True)

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'dashboard.html')
