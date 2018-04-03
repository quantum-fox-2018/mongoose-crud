const routes = require('express').Router();
const {showAllCustomers, newCustomers, updateCustomers, deleteCustomers} = require('../controller/cutomersController');

routes.get('/', showAllCustomers)
      .post('/', newCustomers)
      .put('/:id', updateCustomers)
      .delete('/:id', deleteCustomers)


module.exports = routes;
