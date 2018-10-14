/*

Code Armagan has written in the lecture

*/

var three = 3
var five = 5
var six = 6

three + five
three + six

function add(op1, op2) {
  return op1 + op2
}

add(2456.3, -912.3)

function subtract(operand1, operand2) {
  return operand1 - operand2
}

subtract(0, 15)

var multiplication = (op1, op2) => op1 * op2
multiplication(5, 3)

var armagan = {
  name: 'Armagan',
  age: 34
}

var anna = {
  name: 'Anna',
  age: 30
}

var omar = {
  name: 'Omar',
  surname: 'Aguinaga'
}

// console.log(armagan)
// console.log(anna)

var Person = class {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayName() {
    console.log('My name is' + this.name)
  }

  sayAge() {
    return this.age
  }

  attend(meetup) {
    this.meetup = meetup
    meetup.attendees = this.name
  }
}

var armagan = new Person('Armagan', 34)
var omar = new Person('Omar', 30)
// armagan.sayName()
// omar.sayName()
// console.log(armagan.sayAge())
// console.log(omar.sayAge())

var Meetup = class {
  constructor(name) {
    this.name = name
    this.attendees = null
  }
}

var wtmb = new Meetup('Women TechMakers Berlin')
// console.log(wtmb, armagan)
var anna = new Person('Anna', 30)
armagan.attend(wtmb)
omar.attend(wtmb)
anna.attend(wtmb)

console.log(armagan)
