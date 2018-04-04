const router = require('express').Router();
const {getAllTransactions, getOneTransaction, returnTransaction, createTransaction, deleteTransaction, updateTransaction} = require('../controllers/transaction.controller')

router
    .get('/', getAllTransactions)
    .get('/:id', getOneTransaction) 
    .post('/', createTransaction)
    .put('/return/:id', returnTransaction)
    .delete('/:id', deleteTransaction) 
    .put('/:id', updateTransaction)

module.exports = router