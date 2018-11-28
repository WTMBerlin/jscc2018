const PersonModel = require('../models/person')

async function findAll() {
    return PersonModel.find()
}

async function add(person) {
    return PersonModel.create(person)
}

async function del(_id) {
    return PersonModel.remove({ _id })
}

async function find(_id) {
    return PersonModel.findOne({ _id })
}

module.exports = {
    findAll,
    find,
    add,
    del
}
