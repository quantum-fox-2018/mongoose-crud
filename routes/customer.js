const routes = require('express').Router()
const customerController = require('../controllers/customer-controller')

routes.get('/', customerController.findAll)
routes.get('/:id', customerController.findById)
routes.post('/', customerController.addCustomer)
routes.put('/:id', customerController.update)
routes.delete('/:id', customerController.delete)

module.exports = routes