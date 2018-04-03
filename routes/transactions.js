var express = require('express');
var router = express.Router();
const transController = require('../controllers/transController');

router.get('/', transController.getAll);
router.post('/', transController.addTrans);
router.put('/:id', transController.returnBook);//ceritanya untuk mengembalikan buku, yang di input adalah berapa hari buku dikembalikan dengan input days
router.delete('/:id', transController.deleteTrans);

module.exports = router;
