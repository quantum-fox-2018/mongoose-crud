const Transaction = require('../models/modelTransaction')

module.exports = {
  findAll: function(req, res) {
    Transaction.find()
    .then(dataTrans => {
      res.status(200).send({
        message: 'Show all data',
        data: dataTrans
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'Data not found',
        detail: err.message
      })
    })
  },

  addNew: function(req, res) {
    let newCust = new Transaction({
    })

    newCust.save()
    .then(success => {
      res.status(201).send({
        message: 'Add data success',
        data: newCust
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'Add data failed',
        detail: err.message
      })
    })
  }, 

  updateData: function(req, res) {
    Transaction.findOneAndUpdate({
      _id: req.params.id
    },{
    })
    .then(success => {
      res.status(201).send({
        message: 'Update data success',
        data: req.body
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'Update data failed',
        detail: err.message
      })
    })
  },

  deleteData: function(req, res) {
    Transaction.deleteOne({
      _id: req.params.id
    })
    .then(success => {
      res.status(200).send({
        message: 'Delete data success',
        detail: success
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'Delete data failed',
        detail: err.message
      })
    })
  }
}