const router = require('express').Router()
const { findAll, addNew, updateData, deleteData } = require('../controllers/controllerTransactions')

router.get('/', findAll)
      .post('/', addNew)
      .put('/:id', updateData)
      .delete('/:id', deleteData)

module.exports = router