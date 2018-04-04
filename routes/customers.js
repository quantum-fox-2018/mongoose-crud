const router = require('express').Router();
const {getAllCustomers, getOneCustomer, createCustomer, deleteCustomer, updateCustomer} = require('../controllers/customer.controller')

router
    .get('/', getAllCustomers)
    .get('/:id', getOneCustomer) 
    .post('/', createCustomer)
    .delete('/:id', deleteCustomer) 
    .put('/:id', updateCustomer)

module.exports = router