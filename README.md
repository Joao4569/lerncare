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

All dependencies are recorded in the `requirements.txt` file.

### Runtime

The runtime dependencies are stored in the `runtime.txt file`. A specific Python version is required on runtime due to the `Psycopg2` dependency.

## Deployment

Lerncare is deployed [here!](https://lerncare-13184912aa8c.herokuapp.com/)

Lerncare has been running a continuos deployment cycle from the onset of the development process, in order to keep with the Agile methodology and best practices.

Lerncare is deployed on Heroku while making use of the "Heroku Postgres" Add-on, the Heroku application name is "lerncare".

All the media and static files for Lerncare are stored on Cloudinary. Database url's have been setup to route to Heroku Postgres when in production and SQLite3 when in development (`lerncareProject/setting.py` ).

The Cloudinary apps are listed in the Installed apps list and the paths for static and media files are specified within `lerncareProject/setting.py`, in the relevant sections.

A template path and allowed hosts are also specified in `lerncareProject/setting.py`.

All the environment variables are stored in a `env.py` file and as configuration variables in the Heroku lerncare application in order to keep the platform secure. A Procfile for Heroku was also created.

## Testing

This application is built using a test driven development mindset, integrated automated Python Unit tests are made use of throughout the build process.

### Deployment testing

Once all the deployment settings were in place and the project was deployed on Heroku, I proceeded to manually test the deployment by creating a template for testing output on the deployed site.


## Credits

 - We made use of [Online PNG Tools](https://onlinepngtools.com/) to resize the logo.
 - [Privacy Policy Generator](https://www.privacypolicygenerator.info/) was used to create the current Privacy Policy.