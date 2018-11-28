const express = require('express')
const bodyParser = require('body-parser')

const PersonService = require('./services/person-service')
const MeetupService = require('./services/meetup-service')

require('./mongo-connection')

const app = express()

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

// PERSON ENDPOINTs

app.get('/person/all', async (req, res) => {
  const people = await PersonService.findAll()
  res.render('people', { people })
})

app.get('/person/:id', async (req, res) => {
  const user = await PersonService.find(req.params.id)
  res.render('data', { data: user })
})

app.post('/person', async (req, res) => {
  const user = await PersonService.add(req.body)
  res.send(user)
})

app.delete('/person/:id', async (req, res) => {
  const user = await PersonService.del(req.params.id)
  res.send(user)
})

// MEETUP ENDPOINTS

app.get('/meetup/all', async (req, res) => {
  const meetups = await MeetupService.findAll()
  res.send(meetups)
})

app.get('/meetup/:id', async (req, res) => {
  const meetup = await MeetupService.find(req.params.id)
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

app.listen(3000, () => {
  console.log('Server listening')
})
