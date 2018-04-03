const router = require('express').Router()
const { findAll, addNew, updateData, deleteData } = require('../controllers/controllerCustomer')

router.get('/', findAll)
      .post('/', addNew)
      .put('/:id', updateData)
      .delete('/:id', deleteData)

module.exports = router