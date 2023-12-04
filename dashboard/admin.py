""" Importing MainTopic model to admin site """
from django.contrib import admin
from .models import MainTopic

admin.site.register(MainTopic)
