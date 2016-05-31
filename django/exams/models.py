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
        max_length=128
    )
    question_text = models.TextField(
        help_text="Question Label"
    )


class Answer(models.Model):
    """
    Answer choices for a question.

    One question can have many TRUE answers or FALSE answers. You can add
    multiple answers for one question.

    is_correct: If `True`, this answer is deemed correct.
    If `False`, this answer is deemed incorrect.
    """
    question = models.ForeignKey('exams.Question', related_name='answers')
    value = models.TextField(
        help_text='Answer text'
    )
    is_correct = models.BooleanField(
        default=False
    )


class Results(models.Model):
    exam = models.ForeignKey('exams.Exam', related_name='exams')
    user = models.ForeignKey('auth.User', related_name='users')
    is_passed = models.BooleanField(
        default=False
    )
    tries = models.PositiveIntegerField()
