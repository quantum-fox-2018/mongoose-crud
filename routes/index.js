const express = require('express');
const ControllerBook = require('../controllers/c_books')
const ControllerCustomer = require('../controllers/c_customers')
const ControllerTransactions = require('../controllers/c_transactions')

const routes = express.Router();

routes.get('/books', ControllerBook.showBooks)
routes.post('/books', ControllerBook.addBooks)
routes.put('/books/:id', ControllerBook.updateBooks)
routes.delete('/books/:id', ControllerBook.deleteBooks)

routes.get('/customers', ControllerCustomer.showCustomers)
routes.post('/customers', ControllerCustomer.addCustomers)
routes.put('/customers/:id', ControllerCustomer.updateCustomers)
routes.delete('/customers/:id', ControllerCustomer.deleteCustomers)

routes.get('/transactions', ControllerTransactions.showTransactions)
routes.post('/transactions', ControllerTransactions.addTransactions)
// routes.put('/transactions/:id', ControllerTransactions.updateTransactions)
// routes.delete('/transactions/:id', ControllerTransactions.deleteTransactions)





module.exports = routes;