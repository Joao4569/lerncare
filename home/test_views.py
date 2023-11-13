"""Home app tests."""
from django.test import SimpleTestCase  # , TestCase


class TestViews(SimpleTestCase):
    """Test views in home app."""

    def test_get_home_page(self):
        """Test get home page view."""
        response = self.client.get('/home/')

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'home/index.html')
