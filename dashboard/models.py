""" Importing the models module from the django.db module and
the MaxValueValidator and MinValueValidator from the
django.core.validators module """
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class MainTopic(models.Model):
    """ Main topic model """

    # Main topic model fields
    position = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    name = models.CharField(max_length=100)
    description = models.TextField()

    class Meta:
        """ Set ordering on admin site to position """
        ordering = ['position']

    def __str__(self):
        """This will modify the standard Django string method for
        personalisation on admin site"""
        return (f'{self.position}. {self.name}')
