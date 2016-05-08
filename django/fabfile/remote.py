# -*- coding: utf8 -*-
from fabric.api import cd, env, prefix, run
from fabric.colors import cyan, green, red, yellow  # NOQA
from contextlib import contextmanager as _contextmanager
from .fabric_settings import HOST_NAME

env.user = 'django'
env.hosts = [HOST_NAME, ]
env.forward_agent = True
env.git_source = '/home/django/src/mentorship_community/'
env.django_source = '/home/django/src/mentorship_community/django/'  # NOQA
env.django_destination = '/home/django/project/'
env.wsgi_file = '/home/django/project/mentorship_community/wsgi.py'  # NOQA
env.activate = 'source /home/django/Envs/mentorship_community/bin/activate'

RSYNC_EXCLUDES = [
    'local_settings.py',
    'db.sqlite3',
    '.git',
]


@_contextmanager
def virtualenv():
    with prefix(env.activate):
        yield


def run_collectstatic():
    print(cyan('\n➜  run_collectstatic'))
    with cd(env.django_destination):
        with virtualenv():
            run('python manage.py collectstatic --noinput')


def run_deploy():
    print(cyan('\n➜  run_deploy'))
    run_git_pull()
    run_install_requirements()
    run_rsync_project()
    run_migrate()
    run_collectstatic()
    run_touch_wsgi()
    print(green('\n➜  Deployment succesful!'))


def run_git_pull(branch='master'):
    """
    Revokes all changes on the remote repo and then pulls the latest code.

    There are never supposed to be any changes on the repo. The revoking is
    just a safety net to avoid any conflicts/merges while pulling.

    """
    print(cyan('\n➜  run_git_pull'))
    with cd('%s' % env.git_source):
        # UNDO all changes that might have happened in the repo
        run('git checkout .')
        run('git clean -f')

        # Pull latest code
        run("git pull --no-edit origin master")
        run("git submodule init")
        run("git submodule update")


def run_install_requirements():
    print(cyan('\n➜  run_install_requirements'))
    with virtualenv():
        with cd('%s' % env.django_source):
            run('pip install -r requirements.txt')


def run_migrate():
    print(cyan('\n➜  run_migrate'))
    with cd(env.django_destination):
        with virtualenv():
            run('python manage.py migrate')


def run_rsync_project():
    """
    Copies the project from the git repository to it's destination folder.

    This has the nice side effect of rsync deleting all ``.pyc`` files and
    removing other files that might have been left behind by sys admins messing
    around on the server.

    Usage::

        fab run_rsync_project

    """
    print(cyan('\n➜  run_rsync_project'))
    excludes = ''
    for exclude in RSYNC_EXCLUDES:
        excludes += " --exclude '{0}'".format(exclude)
    command = "rsync -avz --stats --delete {0} {1} {2}".format(
        excludes, env.django_source, env.django_destination)
    run(command)


def run_touch_wsgi():
    """Touches the wsgi file."""
    print(cyan('\n➜  run_touch_wsgi'))
    run('touch {0}'.format(env.wsgi_file))
