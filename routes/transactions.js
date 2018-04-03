const router = require('express').Router()
const {getAllTransaction, addTransaction, deleteTransaction, editTransaction, returnBook} = require('../controllers/transactionController')
const {getFine} = require('../middleware/fine')
router.get('/', getAllTransaction)
router.post('/', addTransaction)
router.delete('/:id', deleteTransaction)
router.put('/:id', editTransaction)
router.put('/return/:id', getFine, returnBook)

module.exports = router