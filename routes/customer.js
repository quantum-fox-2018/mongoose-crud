const routes = require('express').Router()
const customerController = require('../controllers/customer')

routes.get('/', customerController.findAll)
routes.post('/', customerController.createData)
routes.put('/:id', customerController.updateData)
routes.delete('/:id', customerController.deleteData)

module.exports = routes