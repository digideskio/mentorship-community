from __future__ import unicode_literals

from django.db import models


class Skill(models.Model):
    prerequisites = models.ManyToManyField('skills.Skill')
    users = models.ManyToManyField('auth.User', related_name='skills')
    name = models.TextField(
        help_text='Skill Name'
    )


class Track(models.Model):
    skill = models.ForeignKey('skills.Skill', related_name='tracks')


class Module(models.Model):
    track = models.ForeignKey('skills.Track', related_name='modules')
    users = models.ManyToManyField('auth.User', related_name='participants')
    position = models.PositiveIntegerField()
    description = models.TextField(
        max_length=1024,
        help_text='Module Description'
    )
    instructions = models.TextField(
        max_length=1024,
        help_text='Instructions for student'
    )
