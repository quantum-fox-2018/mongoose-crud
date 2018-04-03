const Transaction = require('../models/modelTransaction')
const { getDueDate, calculateFine } = require('../helpers/calculateDateAndFine')

module.exports = {
  findAll: function(req, res) {
    Transaction.find()
    .populate(['member', 'booklist'])
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

  findOne: function(req, res) {
    Book.findOne({
      _id: req.params.id
    })
    .then(found => {
      res.status(200).send({
        message: 'Data found',
        data: found
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
    let newTrans = new Transaction({
      member: req.body.member,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: getDueDate(req.body.out_date, req.body.days),
      in_date: req.body.in_date,
      fine: calculateFine(getDueDate(req.body.out_date, req.body.days), req.body.in_date),
      booklist: req.body.booklist
    })
    
    newTrans.save()
    .then(success => {
      res.status(201).send({
        message: 'Add data success',
        data: newTrans
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
      member: req.body.member,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: getDueDate(req.body.out_date, req.body.days),
      in_date: req.body.in_date,
      fine: calculateFine(getDueDate(req.body.out_date, req.body.days), req.body.in_date),
      booklist: req.body.booklist
    })
    .then(success => {
      res.status(200).send({
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

  patchData: function(req, res) {
    let patchData = req.body

    Transaction.update({
      _id: req.params.id
    },
      patchData  
    )
    .then(success => {
      console.log(patchData);
      
      res.status(200).send({
        message: 'Patch data success',
        data: success
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'Patch data failed',
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