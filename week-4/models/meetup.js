const chalk = require('chalk')

module.exports = class Meetup {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.attendees = []
    }

    report() {
        console.log(chalk.blue.bgRed.bold(this.name), 'meetup is held at', chalk.green(this.location), 'and number of attendees are', this.attendees.length)
    }
}
