const mongoose = require('mongoose')

let customersSchema = mongoose.Schema({
  name: String,
  memberId: String,
  address: String,
  zipcode: String,
  phone: String
}, {
  timestamps: true
})

let customers = mongoose.model('customers', customersSchema)

module.exports = customers;
