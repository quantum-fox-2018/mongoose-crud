const router = require('express').Router();
const controller_book = require('../controllers/controller_books')

router.get('/', controller_book.getData);
router.post('/', controller_book.addData);
router.put('/:id', controller_book.editData);
router.delete('/:id', controller_book.deleteData);

module.exports = router; 