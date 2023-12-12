"""Defines URL patterns for dashboard app."""
from django.urls import path
from . import views

urlpatterns = [

    # dashboard page
    path('', views.Dashboard.as_view(), name='dashboard'),

    # vignette page
    path(
        'vignette/<str:main_topic>/',
        views.VignetteView.as_view(),
        name='vignette'),
]
