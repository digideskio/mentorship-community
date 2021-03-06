# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-05-31 05:08
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
            name='Module',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.PositiveIntegerField()),
                ('description', models.TextField(help_text='Module Description', max_length=1024)),
                ('instructions', models.TextField(help_text='Instructions for student', max_length=1024)),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(help_text='Skill Name')),
                ('prerequisites', models.ManyToManyField(to='skills.Skill')),
                ('users', models.ManyToManyField(related_name='skills', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Track',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('skill', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tracks', to='skills.Skill')),
            ],
        ),
        migrations.AddField(
            model_name='module',
            name='track',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='modules', to='skills.Track'),
        ),
        migrations.AddField(
            model_name='module',
            name='users',
            field=models.ManyToManyField(related_name='modules', to=settings.AUTH_USER_MODEL),
        ),
    ]
