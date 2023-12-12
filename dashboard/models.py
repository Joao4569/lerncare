""" Importing the models module from the django.db module and
the MaxValueValidator and MinValueValidator from the
django.core.validators module. """
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class MainTopic(models.Model):
    """ Main topic model. """

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

    # pylint: disable=invalid-str-returned
    def __str__(self):
        return self.friendly_name


class Aspect(models.Model):
    """ Aspect model to store aspects for each main topic. """

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

    # pylint: disable=invalid-str-returned
    def __str__(self):
        return self.friendly_name


class Keyword(models.Model):
    """ Keyword model for storing keywords for each aspect. """

    keyword = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        default='Keyword here'
        )

    # pylint: disable=invalid-str-returned
    def __str__(self):
        return self.keyword


class Vignette(models.Model):
    """ A model to store vignette content for each main topic. """
    topic = models.OneToOneField(
        'MainTopic',
        on_delete=models.CASCADE,
    )
    aspect = models.ForeignKey(
        'Aspect',
        on_delete=models.CASCADE,
        default='vignette',
    )
    title = models.CharField(max_length=200)
    situation = models.TextField()
    question = models.TextField()
    keywords = models.ManyToManyField(Keyword)

    class Meta:
        """ This will order the vignettes by main topic position. """
        ordering = ['topic__position']

    # pylint: disable=no-member
    def __str__(self):
        return (f'{self.topic.position}. {self.topic.friendly_name}'
                f' - {self.aspect.friendly_name} - Title, situation,'
                f' question and keywords')
