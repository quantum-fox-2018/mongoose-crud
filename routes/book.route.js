const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book.controller');


router.post('/create', bookController.addNewBook);
router.get('/', bookController.showAllBook);
router.put('/update/:id', bookController.updateBookById);
router.delete('/delete/:id', bookController.deleteBookById);

module.exports = router;
