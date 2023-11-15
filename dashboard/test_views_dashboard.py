"""Dashboard app tests."""
from django.test import SimpleTestCase  # , TestCase


class TestViews(SimpleTestCase):
    """Test views in dashboard app."""

    def test_get_dashboard_page(self):
        """Test get dashboard page view."""
        response = self.client.get('/dashboard/')

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'dashboard.html')
