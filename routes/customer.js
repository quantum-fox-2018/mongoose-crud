const express = require('express');
const routercustomer = express.Router();
const customer =require('../controllers/customercontroller.js')

routercustomer.get('/',customer.readcustomer)
routercustomer.post('/',customer.insertcustomer)
routercustomer.put('/:id',customer.updatecustomer)
routercustomer.delete('/:id',customer.deletecustomer)

module.exports = routercustomer
