# """ import TestCase from django.test and MainTopic model from models.py """
# from django.test import TestCase
# from .models import MainTopic


# class MainTopicModelTest(TestCase):
#     """ Main topic model test class """

#     def setUp(self):
#         """ Setting up the test environment """
#         self.main_topic = MainTopic.objects.create(
#             name="Peter Pan",
#             description="Peter Pan is a magical boy"
#         )

#     def test_main_topic_model(self):
#         """ Testing the main topic model """
#         self.assertEqual(self.main_topic.name, "Peter Pan")
#         self.assertEqual(self.main_topic.description,
#                          "Peter Pan is a magical boy")
#         self.assertEqual(str(self.main_topic), "Peter Pan")
