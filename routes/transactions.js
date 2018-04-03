const router = require('express').Router();
const controller_transaction = require('../controllers/controller_transactions')

router.get('/', controller_transaction.getData);
router.post('/', controller_transaction.addData);
router.put('/:id', controller_transaction.editData);
router.delete('/:id', controller_transaction.deleteData);

module.exports = router; 