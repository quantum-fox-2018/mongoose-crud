const Transaction = require('../models/transaction')

module.exports = {
  findAll(req, res) {
    Transaction.find()
    .populate('member booklist')
    .exec()
    .then(transactions => {
      res.status(200).json({
        message: 'success read transactions',
        data: transactions
      })
    })
    .catch(err => {
      res.status(500).json( {message: 'error database'} )
    })
  },

  createData(req, res) {
    let { member, days, out_date, due_date, in_date, fine, booklist } = req.body
    let newTransaction = new Transaction({member, days, out_date, due_date, in_date, fine, booklist})

    newTransaction.save((err, transaction) => {
      if(err) {
        res.status(500).json( {message: 'error database'} )
      } else {
        res.status(201).json({
          message: 'success insert transaction',
          data: transaction
        })
      }
    })
  },

  updateData(req, res) {
    let idObj = req.params.id
    Transaction.findById(idObj, (err, transaction) => {
      if(err) {
        res.status(500).json( {message: 'error database'} )
      } else {
        transaction.member = req.body.member
        transaction.days = req.body.days
        transaction.out_date = req.body.out_date
        transaction.due_date = req.body.due_date
        transaction.in_date = req.body.in_date
        transaction.fine = req.body.fine
        transaction.booklist = req.body.booklist

        transaction.save((err, transaction) => {
          if(err) {
            res.status(500).json( {message: 'error database'} )
          } else {
            res.status(201).json({
              message: 'success update transaction',
              data: transaction
            })
          }
        })
      }
    })
  },

  deleteData(req, res) {
    let idObj = req.params.id
    Transaction.findById(idObj, (err, transaction) => {
      transaction.remove((err, info) => {
        if(err) {
          res.status(500).json( {message: 'error database'} )
        } else {
          res.status(201).json({
            message: 'success delete transaction',
            data: info
          })
        }
      })
    })
  }
}