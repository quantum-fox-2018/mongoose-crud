const express = require('express');
const router = express.Router();
const controller_customer = require('../controllers/controller_customers')

router.get('/', controller_customer.getData);
router.post('/', controller_customer.addData);
router.put('/:id', controller_customer.editData);
router.delete('/:id', controller_customer.deleteData);

module.exports = router; 