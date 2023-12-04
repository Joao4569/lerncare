""" Importing render and View from django.shortcuts and
django.views, as well as the MainTopic model from the
dashboard app """
from django.shortcuts import render
from django.views import View
from .models import MainTopic


class Dashboard(View):
    """ This will handle the dashboard view and it's content"""

    def get(self, request):
        """A view to return the dashboard page."""
        main_topics = MainTopic.objects.all().order_by('position')
        context = {
            'main_topics': main_topics,
        }

        return render(request, 'dashboard.html', context)
