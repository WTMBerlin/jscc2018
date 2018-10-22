const fs = require('fs')
module.exports = {
    save(data) {
        // console.log(data)
        fs.writeFileSync('data.json', JSON.stringify(data))
    },
    load() {
        return JSON.parse(fs.readFileSync('data.json'))
    }
}
