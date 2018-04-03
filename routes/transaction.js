const routes = require('express').Router()
const transactionController = require('../controllers/transaction')

routes.get('/', transactionController.findAll)
routes.post('/', transactionController.createData)
routes.put('/:id', transactionController.updateData)
routes.delete('/:id', transactionController.deleteData)

module.exports = routes