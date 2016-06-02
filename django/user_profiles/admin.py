from django.contrib import admin

from . import models


class UserProfileAdmin(admin.ModelAdmin):
    model = models.UserProfile
    list_display = [
        'user', 'user_email',
    ]
    raw_id_fields = ['user', ]

    def user_email(self, instance):
        return instance.user.email

admin.site.register(models.UserProfile, UserProfileAdmin)
