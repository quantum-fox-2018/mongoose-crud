const routes = require('express').Router()
const book = require('./book')

routes.get('/', (req, res) => {
    res.send('Halaman Home Index')
})


routes.use('/api/books', book)

module.exports = routes