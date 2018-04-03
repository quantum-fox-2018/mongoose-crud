const routes = require('express').Router()
const book = require('./book')
const transanction = require('./transaction')
const customer = require('./customer')

routes.get('/', (req, res) => {
    res.send('Halaman Home Index')
})


routes.use('/api/books', book)
routes.use('/api/transactions', transanction)
routes.use('/api/customers', customer)

module.exports = routes