var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var customerschema = new Schema({
  name:  String,
  memberid: String,
  address: String,
  zipcode: String,
  phone:  String,
  createdAt:
  {
    type: Date,
    default: Date.now
  }
});

const Customers = mongoose.model('customer',customerschema)
module.exports= Customers
