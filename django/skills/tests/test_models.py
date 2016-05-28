import pytest

from mixer.backend.django import mixer

pytestmark = pytest.mark.django_db


class TestSkill:

    def test_init(self):
        obj = mixer.blend('skills.Skill')
        assert obj.pk == 1, 'Should create a skill object'


class TestTrack:

    def test_init(self):
        obj = mixer.blend('skills.Track')
        assert obj.pk == 1, 'Should create a track object'


class TestModule:

    def test_init(self):
        obj = mixer.blend('skills.Module')
        assert obj.pk == 1, 'Should create a module object'
