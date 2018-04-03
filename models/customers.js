const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  memberid:{
    type: String,
    required: true
  },
  address: String,
  zipcode: String,
  phone: String
},
{
  timestamps:true
})

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer