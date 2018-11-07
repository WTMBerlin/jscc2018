const MeetupModel = require('../models/meetup')

async function findAll() {
    return MeetupModel.find()
}

async function add(person) {
    return MeetupModel.create(person)
}

async function del(_id) {
    return MeetupModel.remove({ _id })
}

async function find(_id) {
    return MeetupModel.findOne({ _id })
}

module.exports = {
    findAll,
    find,
    add,
    del
}
