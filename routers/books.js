const router = require('express').Router();
const book = require('../controllers/book_controllers');

//Get all books
router.get('/show', book.showAllBooks);

//Create a new book
router.post('/add', book.createNewBook);

//Update a book
router.put('/update/:id', book.updateBook);

//Delete a book
router.delete('/delete/:id', book.deleteBook);

//Show one book
router.get('/show/:id', book.showOneBook);

module.exports = router;