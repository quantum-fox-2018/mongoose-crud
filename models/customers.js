const mongoose = require('mongoose');

let customerSchema = mongoose.Schema({
  name: String,
  memberid: String,
  address:String,
  zipcode: String,
  phone: String
},{
  timestamps: true
})

let customer = mongoose.model('customer', customerSchema)

module.exports = customer;
