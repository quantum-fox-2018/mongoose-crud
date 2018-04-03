const router = require('express').Router()
const {getAllBook, addBook, deleteBook, editBook} = require('../controllers/booksController')

router.get('/', getAllBook)
router.post('/', addBook)
router.delete('/:id', deleteBook)
router.put('/:id', editBook)

module.exports = router