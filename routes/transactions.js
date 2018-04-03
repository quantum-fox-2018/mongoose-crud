const routes = require('express').Router();
const {showAllTransactions, newTransactions, addBooksTransactions, deleteTransactions} = require('../controller/transactionsController');

routes.get('/', showAllTransactions)
      .post('/', newTransactions)
      .put('/:id', addBooksTransactions)
      .delete('/:id', deleteTransactions)


module.exports = routes;
