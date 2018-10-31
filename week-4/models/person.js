module.exports = class Person {
    constructor(name, age, id) {
        this.name = name
        this.age = age
        this.id = id
    }

    attend(meetup) {
        meetup.attendees.push(this)
    }

    static create({ name, age, id }) {
        return new Person(name, age, id);
    }
}
