const MeetupModel = require('../models/meetup')
const PersonModel = require('../models/person')

async function addAttendee(meetupId, personId) {
    const meetup = await MeetupModel.findOne({ _id: meetupId })
    const person = await PersonModel.findOne({ _id: personId })

    meetup.attendees.push(person)

    await meetup.save()

    return meetup
}

async function findAll() {
    return MeetupModel.find().populate('attendees')
}

async function add(person) {
    return MeetupModel.create(person)
}

async function del(_id) {
    return MeetupModel.remove({ _id })
}

async function find(_id) {
    return MeetupModel.findOne({ _id }).populate('attendees')
}

module.exports = {
    addAttendee,
    findAll,
    find,
    add,
    del
}
