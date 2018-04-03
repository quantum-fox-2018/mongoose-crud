const mongoose = require('mongoose');
const Schema = mongoose.Schema

let customerSchema = new mongoose.Schema({
    name: String,
    memberid: String,
    address: String,
    zipcode : String,
    phone : String,
},{
  timestamp :true
});

let customer = mongoose.model('customer',customerSchema)

module.exports = customer
