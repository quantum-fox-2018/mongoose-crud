const routes = require('express').Router()
const transactionController = require('../controllers/transaction-controller')

routes.get('/', transactionController.findAll)
routes.get('/:id', transactionController.findById)
routes.post('/', transactionController.addTransaction)
routes.put('/:id', transactionController.update)
routes.delete('/:id', transactionController.delete)

module.exports = routes