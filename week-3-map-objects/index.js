const Person = require('./person')
const Meetup = require('./meetup')
const Database = require('./database')

console.log('Hello World!')

const mert = new Person('Mert', 33)
const armagan = new Person('Armagan', 34)
// console.log(mert, armagan)

const wtmb = new Meetup('Women Tech Makers Berlin', 'Eurostaff')
armagan.attend(wtmb)
mert.attend(wtmb)
wtmb.report()

Database.save(wtmb)
const loadedFile = Database.load()
console.log(loadedFile.attendees[0].name)
