const router = require('express').Router()
const controllerBook = require('../controllers/book.controller')

router.post('/books', controllerBook.createData)        // C
router.get('/books', controllerBook.getAllData)         // R
router.put('/books/:id', controllerBook.updateData)     // U
router.delete('/books/:id', controllerBook.deleteData)  // D

module.exports = router