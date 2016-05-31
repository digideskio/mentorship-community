from django.contrib import admin

from . import models


class SkillAdmin(admin.ModelAdmin):
    model = models.Skill
    fields = [
        'name', 'prerequisites', 'users'
    ]
    raw_id_fields = ['users', ]
    list_display = [
        'name', 'users_count'
    ]

    def users_count(self, obj):
        return obj.users.count()
    users_count.short_description = 'Users Enrolled'


class ModuleInline(admin.StackedInline):
    model = models.Module
    extra = 1
    fields = [
        ('name', 'position'), 'description', 'instructions', 'users'
    ]
    raw_id_fields = ['users', ]


class TrackAdmin(admin.ModelAdmin):
    model = models.Track
    inlines = [ModuleInline, ]


admin.site.register(models.Skill, SkillAdmin)
admin.site.register(models.Track, TrackAdmin)
