const Customer = require('../models/modelCustomer')

module.exports = {
  findAll: function(req, res) {
    Customer.find()
    .then(dataCust => {
      res.status(200).send({
        message: 'Show all data',
        data: dataCust
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
    let newCust = new Customer({
      name: req.body.name,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
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
    Customer.findOneAndUpdate({
      _id: req.params.id
    },{
      name: req.body.name,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
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
    Customer.deleteOne({
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