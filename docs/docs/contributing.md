# Contibuter's Guide

If you would like to help out with this project, pull requests are welcomed.

In order to setup a local development environment, try the following:

```bash
mkdir ~/Projects/mentorship-community
cd ~/Projects/mentorship-community
git clone https://github.com/mbrochh/mentorship-community.git src
cd src/django
mkvirtualenv mentorship-community
pip install -r requirements.txt
cd ~/Projects/mentorship-community/src/reactjs
npm install
```

In order to start the development servers, try this:

```bash
cd ~/Projects/mentorship-community/src/django
workon mentorship-community
./manage.py runserver
# in another terminal
cd ~/Projects/mentorship-community/src/reactjs
node server.js
```

Now you should be able to visit `localhost:8000` in your browser.
