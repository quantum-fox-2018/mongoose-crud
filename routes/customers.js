const router = require('express').Router()
const {getAllCustomer, addCustomer, removeCustomer, editCustomer} = require('../controllers/customerController')

router.get('/', getAllCustomer)
router.post('/', addCustomer)
router.delete('/:id', removeCustomer)
router.put('/:id', editCustomer)


module.exports = router