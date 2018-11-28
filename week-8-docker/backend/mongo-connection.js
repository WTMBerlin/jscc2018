const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/test', { useNewUrlParser: true })
    .then(() => {
        console.log('Mongoose connected')
    })
    .catch(err => {
        console.log(err)
        process.exit(1)
    })
