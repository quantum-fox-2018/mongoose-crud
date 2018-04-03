var express = require('express');
var router = express.Router();
const Books = require('../controllers/books.controller')

/* GET users listing. */
router.get('/',Books.read)
router.post('/',Books.create)
router.put('/:id',Books.update)
router.delete('/:id',Books.delete)

module.exports = router;
