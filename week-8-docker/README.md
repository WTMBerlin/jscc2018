# WTM JavaScript Crash Course 2018

## Week 8: Docker

### Requirements

- [Docker](https://www.docker.com/get-started)
- [node.js](https://nodejs.org/en/)

### Agenda

We will cover some key concepts about DevOps and Docker.

Then workshop will continue with some playing around with Docker. Followed by dockerizing the applications we have built on previous lectures.


### Changes in the apps

#### Backend

- `process.exit()` added to mongoose connect failure.
- `app.get('/meetup/all')` handler now responds in JSON with `res.send(data)` instead of html with `res.render('data', { data })`.

#### Frontend

- URLs in fetch methods changed in order to work within Docker.
- Added `devServer` configuration `host: '0.0.0.0',` in `vue.config.js`, in order to make Vue server responsive to all requests even in docker.
