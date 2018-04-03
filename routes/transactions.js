const router = require('express').Router()
const transactionController = require('../controllers/transactionController')

router.get('/', transactionController.findAll)

router.post('/', transactionController.create)

router.put('/:id', transactionController.update)

router.delete('/:id', transactionController.delete)

router.patch('/:id', transactionController.addBookList)

module.exports = router
