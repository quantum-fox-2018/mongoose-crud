var express = require('express');
var router = express.Router();
const custController = require('../controllers/custController');

/* GET users listing. */
router.get('/', custController.getAll);
router.post('/', custController.addCust);
router.put('/:id', custController.updateCust);
router.delete('/:id', custController.deleteCust);

module.exports = router;
