from __future__ import unicode_literals

from django.db import models


class Skill(models.Model):
    # name
    prerequisites = models.ManyToManyField('skills.Skill')
    users = models.ManyToManyField('auth.User', related_name='modules')


class Track(models.Model):
    skill = models.ForeignKey('skills.Skill', related_name='tracks')


class Module(models.Model):
    track = models.ForeignKey('skills.Track', related_name='modules')
    users = models.ManyToManyField('auth.User', related_name='modules')
    # position (PositiveIntegerField)
    # description
    # instructions
