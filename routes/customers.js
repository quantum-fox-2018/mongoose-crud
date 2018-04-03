const router = require('express').Router()
const customerController = require('../controllers/customerController')

router.get('/', customerController.findAll)

router.post('/', customerController.create)

router.put('/:id', customerController.update)

router.delete('/:id', customerController.delete)

module.exports = router
