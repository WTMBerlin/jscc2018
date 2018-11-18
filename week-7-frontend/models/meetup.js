const mongoose = require('mongoose')

const MeetupSchema = new mongoose.Schema({
    name: String,
    location: String,
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }]
})

module.exports = mongoose.model('Meetup', MeetupSchema);
