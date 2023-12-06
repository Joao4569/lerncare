"""Defines URL patterns for dashboard app."""
from django.urls import path
from . import views

urlpatterns = [

    # dashboard page
    path('', views.Dashboard.as_view(), name='dashboard'),

    # vignette page
    path('vignette/', views.Vignette.as_view(), name='vignette'),
]
