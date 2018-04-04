const router = require('express').Router();
const controller_transaction = require('../controllers/controller_transactions')

router.get('/', controller_transaction.getData);
router.post('/', controller_transaction.addTransaction);
router.put('/:id', controller_transaction.editData);
router.delete('/:id', controller_transaction.deleteData);
router.patch('/:id', controller_transaction.returnBook)

module.exports = router; 