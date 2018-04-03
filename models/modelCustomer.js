const mongoose = require('mongoose')
const Schema = mongoose.Schema

let customerSchema = new Schema({
  name: String,
  memberId: String,
  address: String,
  zipcode: String,
  phone: String
},{
  timestamps: true
})

let Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer