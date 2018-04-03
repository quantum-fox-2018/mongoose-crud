const express = require('express');
const router = express.Router();

const transController = require('../controllers/transaction.controller');


router.post('/create', transController.addNewTransaction);
router.get('/', transController.showAllTransaction);
router.put('/update/:id', transController.updateTransactionById);
router.delete('/delete/:id', transController.deleteTransactionById);

module.exports = router;
