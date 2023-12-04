""" Importing the models module from the django.db module """
from django.db import models


class MainTopic(models.Model):
    """ Main topic model """

    # Main topic model fields
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        """This will modify the standard Django string method for
        personalisation on admin site"""
        return str(self.name)
