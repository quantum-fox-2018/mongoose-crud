const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books')

router.get('/', booksController.getAllBooks)
router.get('/:id', booksController.getOneBook)
router.post('/', booksController.createBook)
router.put('/:id', booksController.updateBook)
router.delete('/:id', booksController.deleteBook)

module.exports = router;
