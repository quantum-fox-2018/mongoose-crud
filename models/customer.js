var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    name: String,
    memberid: 
    {
        type: String,
        unique: true
    },
    address: String,
    zipcode: String,
    phone: String
},{
    timestamps: true
});

let Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;