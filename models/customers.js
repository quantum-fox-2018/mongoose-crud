const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Name required']
    },
    memberid: {
      type: String,
      required: [true, 'Member id required']
    },
    address: {
      type: String,
      required: [true, 'Addres required']
    },
    zipcode: {
      type: String,
      required: [true, 'Zip code required']
    },
    phone: {
      type: String,
      required: [true, 'Phone number required']
    },
  });

let customer = mongoose.model('customers', customerSchema);

module.exports = customer
