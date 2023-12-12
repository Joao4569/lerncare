""" Importing dashboard models to admin site """
from django.contrib import admin
from .models import MainTopic, Aspect, Keyword, Vignette


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


class VignetteAdmin(admin.ModelAdmin):
    """ This class will handle the vignette model content displayed
    on the admin page """
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "aspect":
            # pylint: disable=no-member
            kwargs["queryset"] = Aspect.objects.filter(
                programmatic_name='vignette'
                )
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


# Register models to admin site
admin.site.register(MainTopic, MainTopicAdmin)
admin.site.register(Aspect, AspectAdmin)
admin.site.register(Vignette, VignetteAdmin)
admin.site.register(Keyword)
