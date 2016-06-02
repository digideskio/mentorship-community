from __future__ import unicode_literals

from django.db import models


class Skill(models.Model):
    prerequisites = models.ManyToManyField(
        'skills.Skill',
        blank=True
    )
    users = models.ManyToManyField(
        'auth.User',
        related_name='skills',
        blank=True)
    name = models.CharField(
        help_text='Skill Name',
        max_length=512,
        null=True,
    )

    def __unicode__(self):
        return u'{}'.format(self.name)


class Track(models.Model):
    skill = models.ForeignKey('skills.Skill', related_name='tracks')
    name = models.CharField(
        help_text='Track Name',
        max_length=512,
        null=True,
    )

    def __unicode__(self):
        return u'{}'.format(self.name)


class Module(models.Model):
    track = models.ForeignKey('skills.Track', related_name='modules')
    users = models.ManyToManyField(
        'auth.User',
        related_name='modules',
        blank=True
    )
    position = models.PositiveIntegerField()
    description = models.TextField(
        max_length=1024,
        help_text='Module Description'
    )
    instructions = models.TextField(
        max_length=1024,
        help_text='Instructions for student'
    )
    name = models.CharField(
        help_text='Module Name',
        max_length=512,
        null=True,
    )

    def __unicode__(self):
        return u'{}'.format(self.name)
