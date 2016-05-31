from __future__ import unicode_literals

from django.db import models


class UserProfile(models.Model):
    GENDER_TYPE_CHOICE = (
        ('male', 'Male'),
        ('female', 'Female'),
    )
    user = models.OneToOneField('auth.User', related_name='profile')
    short_bio = models.TextField(
        blank=True,
        help_text='Tell us more about you',
        max_length=1024
    )
    gender = models.CharField(
        choices=GENDER_TYPE_CHOICE,
        max_length=64,
    )
    birth_date = models.DateField(
        blank=True,
        null=True
    )
    avatar = models.ImageField(
        null=True,
        blank=True,
        upload_to='avatar/',
    )
    facebook_url = models.URLField(
        max_length=255,
        help_text='Your Facebook Profile URL'
    )
    github_username = models.CharField(
        max_length=255,
        help_text='Your Github username'
    )
    twitter_username = models.CharField(
        max_length=255,
        help_text='Your Twitter username'
    )
    # slack for later...
