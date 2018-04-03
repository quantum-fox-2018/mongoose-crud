const routes = require('express').Router()

routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello'
  })
})

routes.use('/books', require('./book'))
routes.use('/customers', require('./customer'))
routes.use('/transactions', require('./transaction'))

module.exports = routes