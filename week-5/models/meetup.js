const mongoose = require('mongoose')

const MeetupSchema = new mongoose.Schema({
    name: String,
    location: String
})

module.exports = mongoose.model('Meetup', MeetupSchema);
