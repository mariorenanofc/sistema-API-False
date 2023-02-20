const { String } = require('core-js')
const mongoose = require('mongoose')

const Linksurl = mongoose.model('Linksurl', {
    title: String,
    url: String,
    name: String
})

module.exports = Linksurl