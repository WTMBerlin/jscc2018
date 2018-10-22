const Person = require('./person')
const Meetup = require('./meetup')
const Database = require('./database')

console.log('Hello World!')

const add = (num1, num2) => num1 + num2
const addResult = add(4, 7)
const multiply = (num1, num2) => num1 * num2
// console.log(addResult)
const multiplyResult = multiply(addResult, 6)
// console.log(multiplyResult)

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
