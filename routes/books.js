var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController');

/* GET users listing. */
router.get('/', bookController.getAll);
router.post('/', bookController.addBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
