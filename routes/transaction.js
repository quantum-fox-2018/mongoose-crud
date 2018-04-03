const router = require('express').Router()
const controllerTransaction = require('../controllers/transaction.controller')

router.post('/transaction', controllerTransaction.createData)        // C
router.get('/transaction', controllerTransaction.getAllData)         // R
router.put('/transaction/:id', controllerTransaction.updateData)     // U
router.delete('/transaction/:id', controllerTransaction.deleteData)  // D

module.exports = router