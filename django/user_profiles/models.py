from __future__ import unicode_literals

from django.db import models


class UserProfile(models.Model):
    user = models.OneToOneField('auth.User', related_name='profile')
    # short_bio
    # gender
    # birth_date
    # avatar
    # facebook_url
    # github_username
    # twitter_username
    # slack for later...
