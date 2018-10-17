class Meetup {
  constructor(name, location) {
      this.name = name
      this.location = location
      this.attendees = []
  }

  report() {
      console.log(this.name, 'meetup is held at', this.location, 'and number of attendees are', this.attendees.length)
  }
}

class Person {
  constructor(name, age) {
      this.name = name
      this.age = age
  }

  attend(meetup) {
      meetup.attendees.push(this)
  }
}
