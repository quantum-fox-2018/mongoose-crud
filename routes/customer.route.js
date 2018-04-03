const express = require('express');
const router = express.Router();

const custController = require('../controllers/customer.controller');


router.post('/create', custController.addNewCustomer);
router.get('/', custController.showAllCustomer);
router.put('/update/:id', custController.updateCustomerByMemberId);
router.delete('/delete/:id', custController.deleteCustomerByMemberId);

module.exports = router;
