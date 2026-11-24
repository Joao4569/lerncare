"""Home app tests."""
from django.test import SimpleTestCase, override_settings


TEST_STORAGES = {
    'default': {
        'BACKEND': 'django.core.files.storage.FileSystemStorage',
    },
    'staticfiles': {
        'BACKEND': 'django.contrib.staticfiles.storage.StaticFilesStorage',
    },
}


@override_settings(STORAGES=TEST_STORAGES, STATIC_ROOT=None)
class TestViews(SimpleTestCase):
    """Test views in home app."""

    def test_get_home_page(self):
        """Test get home page view."""
        response = self.client.get('/', secure=True)

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')

    def test_http_redirects_to_https(self):
        """Test insecure requests are redirected in production settings."""
        response = self.client.get('/')

        self.assertEqual(response.status_code, 301)
        self.assertTrue(response['Location'].startswith('https://'))
