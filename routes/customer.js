const router = require('express').Router()
const controllerCustomer = require('../controllers/customer.controller')

router.post('/customers', controllerCustomer.createData)        // C
router.get('/customers', controllerCustomer.getAllData)         // R
router.put('/customers/:id', controllerCustomer.updateData)     // U
router.delete('/customers/:id', controllerCustomer.deleteData)  // D

module.exports = router