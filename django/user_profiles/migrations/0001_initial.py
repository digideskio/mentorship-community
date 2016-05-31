# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-05-31 04:55
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('short_bio', models.TextField(blank=True, help_text='Tell us more about you', max_length=1024)),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female')], max_length=64)),
                ('birth_date', models.DateField(blank=True, null=True)),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='avatar/')),
                ('facebook_url', models.URLField(blank=True, help_text='Your Facebook Profile URL', max_length=255)),
                ('github_username', models.CharField(blank=True, help_text='Your Github username', max_length=255)),
                ('twitter_username', models.CharField(blank=True, help_text='Your Twitter username', max_length=255)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
