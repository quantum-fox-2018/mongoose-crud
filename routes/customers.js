var express = require('express');
var router = express.Router();
const Customer = require('../controllers/customers.controller')

/* GET users listing. */
router.get('/', Customer.read)
router.post('/', Customer.create)
router.put('/', Customer.update)
router.delete('/', Customer.delete)


module.exports = router;
