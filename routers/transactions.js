const router = require('express').Router();
const transaction = require('../controllers/transactions_controllers');

//Get all books
router.get('/show', transaction.showAllTransaction);

//Create a new book
router.post('/add', transaction.createNewTransaction);

//Update a book
router.put('/return/:id', transaction.returnBook);

//Delete a book
router.delete('/delete/:id', transaction.deleteTransaction);

//Show one book
router.get('/show/:id', transaction.showOneTransaction);

module.exports = router;