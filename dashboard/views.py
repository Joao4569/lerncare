""" Importing render and View from django.shortcuts and
django.views, as well as the MainTopic model from the
dashboard app """
from django.shortcuts import render
from django.views import View
from .models import MainTopic, Vignette


class Dashboard(View):
    """ This will handle the dashboard view and it's content"""

    def get(self, request):
        """A view to return the dashboard page."""

        # pylint: disable=no-member
        main_topics = MainTopic.objects.all().order_by('position')
        context = {
            'main_topics': main_topics,
        }

        return render(request, 'dashboard.html', context)


class VignetteView(View):
    """ This will handle the vignette view and it's content"""

    def get(self, request, main_topic):
        """A view to return the vignette page."""

        topic_selected = main_topic
        aspect_selected = "vignette"

        # pylint: disable=no-member
        vignette_content = Vignette.objects.all()
        context = {
            'vignette_content': vignette_content,
            'aspect_selected': aspect_selected,
            'topic_selected': topic_selected,
        }

        return render(request, 'vignette.html', context)
