const router = require('express').Router()
const { findAll, findOne, addNew, updateData, patchData, deleteData } = require('../controllers/controllerCustomer')

router.get('/', findAll)
      .get('/:id', findOne)
      .post('/', addNew)
      .put('/:id', updateData)
      .patch('/:id', patchData)
      .delete('/:id', deleteData)

module.exports = router