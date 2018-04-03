const {getAll,addTransaction,removeTransaction,updateTransaction,getOne}  = require('../controllers/transactionController')

const express = require('express');
const router = express.Router()

router.get('/',getAll)
router.post('/add',addTransaction)
router.delete('/delete/:id',removeTransaction)
router.put('/update/:id',updateTransaction)
router.get('/:id',getOne)


module.exports = router
