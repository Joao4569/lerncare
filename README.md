# Lerncare

## Introduction

## Table of Content

* [Conception](#conception)
  * [Scope](#scope)
  * [Wireframes](#wireframes)

* [Django Setup](#django-setup)
  * [Django Apps](#django-apps)
    * [Home](#home)
    * [Dashboard](#dashboard)

  * [Dependencies](#dependencies)
    * [Runtime](#runtime)

* [Deployment](#deployment)

* [Testing](#testing)
  * [Deployment Testing](#deployment-testing)


## Conception

### Scope

### Wireframes

## Django Setup

Django Project name: lerncareProject

`Base.html` and all other template includes are stored in the `lerncare\templates\includes\` folder.

### Django Apps

#### Home

This will hold the content for everything related to the Landing page

#### Dashboard

This will hold the content for everything related to the User Dashboard.

## Dependencies

The application targets Django 5.2 LTS. Direct production dependencies are
pinned in `requirements.txt`.

### Runtime

The supported runtime is Python 3.14, declared in `.python-version`. Heroku uses
the latest available Python 3.14 patch release on each build.

Create a local environment and install the dependencies with:

```bash
python3.14 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
export DEBUG=True
```

## Deployment

Lerncare is deployed [here!](https://lerncare-13184912aa8c.herokuapp.com/)

Lerncare uses continuous deployment from the `main` branch.

Lerncare is deployed on Heroku while making use of the "Heroku Postgres" Add-on, the Heroku application name is "lerncare".

Static files are collected during the Heroku build and served by WhiteNoise.
The application uses Heroku Postgres when `DATABASE_URL` is present and SQLite
for local development.

The production environment must define `SECRET_KEY`. `ALLOWED_HOSTS` can be a
comma-separated list and defaults to the current Heroku hostname plus local
development hosts. Set `DEBUG=True` only during local development.

Heroku terminates TLS at its router. Django trusts the forwarded HTTPS header,
redirects plain HTTP requests, uses secure session and CSRF cookies, and starts
with a one-hour HSTS policy. `SECURE_HSTS_SECONDS` can be increased after the
HTTPS configuration has been observed in production. HSTS subdomain and preload
directives deliberately remain disabled for the shared Heroku hostname; enable
them only after validating every subdomain of a custom domain.

The `Procfile` applies pending migrations in Heroku's release phase, then starts
the Django WSGI application with Gunicorn.

## Testing

Run the checks and tests with:

```bash
python manage.py check
python manage.py makemigrations --check --dry-run
python manage.py test
python manage.py collectstatic --noinput
gunicorn --check-config lerncareProject.wsgi
```

### Deployment testing

Before a production release, take a Heroku Postgres backup and verify the home
page, dashboard, admin, database access, and static assets in staging. After
deployment, run `python manage.py check --deploy` with the production
configuration and smoke-test the same routes.


## Credits

 - We made use of [Online PNG Tools](https://onlinepngtools.com/) to resize the logo.
 - [Privacy Policy Generator](https://www.privacypolicygenerator.info/) was used to create the current Privacy Policy.
 - Avatar Image by [Freepik](https://www.freepik.com/free-psd/3d-illustration-human-avatar-profile_58509057.htm#query=png%20avatars&position=16&from_view=keyword&track=ais&uuid=8e58f772-3b45-46c3-933c-a61a490cae2f)">
