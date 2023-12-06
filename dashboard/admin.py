""" Importing dashboard models to admin site """
from django.contrib import admin
from .models import MainTopic, Aspect, AspectContent


class MainTopicAdmin(admin.ModelAdmin):
    """ Admin class for main topic model """

    list_display = (
        'friendly_name',
        'programmatic_name',
        'position',
    )

    ordering = ('position',)


class AspectAdmin(admin.ModelAdmin):
    """ Admin class for aspect model """

    list_display = (
        'friendly_name',
        'programmatic_name',
        'description',
    )


class AspectContentAdmin(admin.ModelAdmin):
    """ Admin class for aspect content model """

    ordering = ('aspect',)


# Register models to admin site
admin.site.register(MainTopic, MainTopicAdmin)
admin.site.register(Aspect, AspectAdmin)
admin.site.register(AspectContent, AspectContentAdmin)
