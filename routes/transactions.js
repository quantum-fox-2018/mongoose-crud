const router = require('express').Router();
const {getAllTransactions, getOneTransaction, createTransaction, deleteTransaction, updateTransaction} = require('../controllers/transaction.controller')

router
    .get('/', getAllTransactions)
    .get('/:id', getOneTransaction) 
    .post('/', createTransaction)
    .delete('/:id', deleteTransaction) 
    .put('/:id', updateTransaction)

module.exports = router