const express = require('express');
const routertransaction = express.Router();
const transaction =require('../controllers/transactioncontroller.js')

routertransaction.get('/',transaction.readtransaction)
routertransaction.post('/',transaction.inserttransaction)
routertransaction.put('/:id',transaction.updatetransaction)
routertransaction.delete('/:id',transaction.deletetransaction)

module.exports = routertransaction
