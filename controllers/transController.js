const trans = require('../models/transactions');
const mongoose = require('mongoose');

module.exports = {
  getAll: function(req, res) {
    trans
      .find()
      .populate('member')
      .populate('booklist')
      .exec()
      .then(translist => {
        res.status(200).json({
          message: 'success get data',
          data: translist
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'failed to get data'
        })
      })
  },
  addTrans: function(req,res) {
    let newMember = mongoose.Types.ObjectId(req.body.member)
    let newBook = mongoose.Types.ObjectId(req.body.bookid)
    console.log(req.body.days);
    let { days, booklist } = req.body
    let newTrans = new trans({
      member: newMember,
      days,
      out_date: new Date(),
      due_date: new Date(new Date().getTime()+((req.body.days)*24*60*60*1000)),
      booklist: newBook
    })

    newTrans.save((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.status(201).json({
          message: 'successfully added a new transaction !',
          data: result
        })
      }
    })
  },
  returnBook: function(req, res) {
    let id = mongoose.Types.ObjectId(req.params.id)
    const fineperday = 1000
    let fined;

    trans.findById(id, (err, transaction) => {
      if (transaction.days == req.body.days || req.body.days <= transaction.days) {
        fined = 0
      } else {
        fined = fineperday*(req.body.days-transaction.days)
      }


      trans.findByIdAndUpdate(id, {
        in_date: new Date(new Date().getTime()+((req.body.days)*24*60*60*1000)),
        fine: fined
      })
      .then(update => {
        res.status(200).json({
          message: 'success update data',
          data: req.body
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'failed to update data'
        })
      })
    })
  },
  deleteTrans: function(req, res) {
    let id = mongoose.Types.ObjectId(req.params.id)
    trans.findOneAndRemove({ _id: id })
    .then(deleted => {
      res.status(200).json({
        message: 'success delete data',
        data: req.body
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'failed to delete data'
      })
    })
  }

};
