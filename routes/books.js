const router = require('express').Router();
const {getAllBooks, getOneBook, createBook, deleteBook, updateBook} = require('../controllers/book.controller')

router
    .get('/', getAllBooks)
    .get('/:id', getOneBook) 
    .post('/', createBook)
    .delete('/:id', deleteBook) 
    .put('/:id', updateBook)

module.exports = router