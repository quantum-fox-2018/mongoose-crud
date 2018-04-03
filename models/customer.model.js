const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode: String,
    phone: String
})

var Customer = mongoose.model('customer', schema)

module.exports = Customer