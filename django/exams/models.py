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
    # question_type (CharField with choices)


class Answer(models.Model):
    question = models.ForeignKey('exams.Question', related_name='answers')
    # value
    # is_correct


class Results(models.Model):
    exam = models.ForeignKey('exams.Exam', related_name='results')
    user = models.ForeignKey('auth.User', related_name='results')
    # is_passed (BooleanField)
    # tries (PositiveIntegerField)
