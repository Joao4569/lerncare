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
        ],
        null=False,
        blank=False
    )

    programmatic_name = models.CharField(
        max_length=100,
        null=False,
        blank=False
        )

    friendly_name = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default='Friendly name here'
        )


class Aspect(models.Model):
    """ Aspect model to store aspects for each main topic """

    # Aspect model fields
    programmatic_name = models.CharField(
        max_length=100,
        null=False,
        blank=False
        )

    friendly_name = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default='Friendly name here'
        )
    description = models.TextField(null=False, blank=False)


class AspectContent(models.Model):
    """Aspect content model for storing content for each aspect"""

    # Aspect content model fields
    topic = models.ForeignKey(
        'MainTopic',
        null=True,
        on_delete=models.SET_NULL
    )
    aspect = models.ForeignKey(
        'Aspect',
        null=True,
        on_delete=models.SET_NULL
    )
    aspect_content_item = models.TextField(null=False, blank=False)

    def __str__(self):
        """This will modify the standard Django string method for
        personalisation on admin site"""
        return (f'{self.aspect.friendly_name} / {self.topic.friendly_name}'
                f' / {self.aspect_content_item}')
