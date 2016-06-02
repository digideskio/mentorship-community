import pytest

from mixer.backend.django import mixer

pytestmark = pytest.mark.django_db


class TestExam:

    def test_init(self):
        obj = mixer.blend('exams.Exam')
        assert obj.pk == 1, 'Should create exam object'


class TestQuestion:

    def test_init(self):
        obj = mixer.blend('exams.Question')
        assert obj.pk == 1, 'Should create exam\'s question object'


class TestAnswer:

    def test_init(self):
        obj = mixer.blend('exams.Answer')
        assert obj.pk == 1, 'Should create exam\'s answer object'


class TestResults:

    def test_init(self):
        obj = mixer.blend('exams.Results')
        assert obj.pk == 1, 'Should create exam\'s results object'
