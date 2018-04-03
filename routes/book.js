const routes = require('express').Router()
const bookController = require('../controllers/book-controller')

routes.get('/', bookController.findAll)
routes.get('/:id', bookController.findById)
routes.post('/', bookController.addBook)
routes.put('/:id', bookController.update)
routes.delete('/:id', bookController.delete)

module.exports = routes