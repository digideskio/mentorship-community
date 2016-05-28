from __future__ import unicode_literals

from django.db import models


class Exam(models.Model):
    module = models.ForeignKey('skills.Module', related_name='exams')


class Question(models.Model):
    QUESTION_TYPES = (
        ('single_choice', 'Single Choice'),
        ('multiple_choice', 'Multiple Choice'),
        ('free_text', 'Free Text'),
    )

    exam = models.ForeignKey('exams.Exam', related_name='questions')
    question_type = models.CharField(
        choices=QUESTION_TYPES,
        max_length=255
    )


class Answer(models.Model):
    question = models.ForeignKey('exams.Question', related_name='answers')
    """
    This answer may be correct or incorrect for the related question
    """
    value = models.TextField(
        max_length=1024,
        help_text='Answer text'
    )
    is_correct = models.BooleanField(
        default=False
    )


class Results(models.Model):
    exam = models.ForeignKey('exams.Exam', related_name='results')
    user = models.ForeignKey('auth.User', related_name='results')
    is_passed = models.BooleanField(
        default=False
    )
    tries = models.PositiveIntegerField()
