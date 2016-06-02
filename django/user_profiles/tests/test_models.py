import pytest

from mixer.backend.django import mixer

pytestmark = pytest.mark.django_db


class TestUserProfile:

    def test_init(self):
        obj = mixer.blend('user_profiles.UserProfile')
        assert obj.pk == 1, 'Should create a user profile object'
