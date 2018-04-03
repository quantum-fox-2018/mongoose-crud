var express = require('express');
var router = express.Router();
const Transaction = require('../controllers/transactions.controller')

/* GET users listing. */
router.get('/',Transaction.read)
router.post('/',Transaction.create)
router.put('/',Transaction.return)
router.delete('/',Transaction.delete)


module.exports = router;
