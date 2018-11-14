const express = require('express')
const bodyParser = require('body-parser')

const PersonService = require('./services/person-service')
const MeetupService = require('./services/meetup-service')

require('./mongo-connection')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

// PERSON ENDPOINTs

app.get('/person/all-list', async (req, res) => {
  const people = await PersonService.findAll()
  res.render('people', { people })
})

app.get('/person/all', async (req, res) => {
  const people = await PersonService.findAll()
  res.send(people)
})

app.get('/person/:id', async (req, res) => {
  const user = await PersonService.find(req.params.id)
  res.render('data', { data: user })
})

app.get('/person/:id/json', async (req, res) => {
  const user = await PersonService.find(req.params.id)
  if (!user) res.status(404)
  res.send(user)
})

app.post('/person', async (req, res, next) => {
  const person = await PersonService.add(req.body)
  res.send(person)
})

app.delete('/person/:id', async (req, res) => {
  const user = await PersonService.del(req.params.id)
  res.send('ok!')
})

// MEETUP ENDPOINTS

app.get('/meetup/all-list', async (req, res) => {
  const meetups = await MeetupService.findAll()
  res.render('data', { data: meetups })
})

app.get('/meetup/all', async (req, res) => {
  const meetups = await MeetupService.findAll()
  res.send(meetups)
})

app.get('/meetup/:id', async (req, res) => {
  const meetup = await MeetupService.find(req.params.id)
  res.render('data', { data: meetup })
})

app.get('/meetup/:id/json', async (req, res) => {
  const meetup = await MeetupService.find(req.params.id)
  if (!meetup) res.status(404)
  res.send(meetup)
})


app.post('/meetup', async (req, res) => {
  const meetup = await MeetupService.add(req.body)
  res.send(meetup)
})

app.post('/meetup/:id/addAttendee', async (req, res) => {
  const meetup = await MeetupService.addAttendee(req.params.id, req.body.personId)
  res.send(meetup)
})

app.delete('/meetup/:id', async (req, res) => {
  await MeetupService.del(req.params.id)
  res.send('ok!')
})
module.exports = app
