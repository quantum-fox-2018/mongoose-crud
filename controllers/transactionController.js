const Transaction = require('../models/transactions')
const ObjectId = require('mongodb').ObjectID

module.exports = {
  create: (req,res) => {
    const newTransaction = new Transaction(req.body)
    newTransaction.save(err => {
      if (err){
        return res.status(500).json({
        err: err.message
        })
      } else {
        return res.status(200).json({
          message:"inserted new transaction",
          transaction: req.body
        })
      }
    })
  },
  findAll: (req,res) =>{
    Transaction.find((err, transactions) => {
      if(err){
        return res.status(500).json({
          err: err.message
        })
      } else {
        return res.status(200).json({
          message:"this is all data",
          transactions
        })
      }
    })
    .populate('member')
    .populate('booklist')
  },
  update: (req,res)=>{
    Transaction.update({
      _id: ObjectId(req.params.id)
    },{
      $set: req.body
    },(err, transactions)=>{
      if(err){
        res.status(500).json({
          message: `this is error`
        })
      } else {
        res.status(200).json({
          message: `data updated`,
          data: transactions
        })
      }
    })
    .populate('member')
    .populate('booklist')
  },
  delete: (req,res)=>{
    Transaction.findByIdAndRemove({
      _id: ObjectId(req.params.id)
    },(err, transactions)=>{
      if(err){
        res.status(500).json({
          message: `this is error`
        })
      } else {
        res.status(200).json({
          message: `data deleted`,
          data: transactions
        })
      }
    })
  },
  addBookList: (req,res)=>{
    Transaction.find({
      _id: ObjectId(req.params.id)
    },(err, transactions) => {
      let array = transactions[0].booklist
      array.push(req.body.booklist)
      let obj = {
        booklist: array
      }
      Transaction.update({
        _id: ObjectId(req.params.id)
      },{
        $set: obj
      },(err, transactions2)=>{
        if(err){
          res.status(500).json({
            message: `this is error`
          })
        } else {
          res.status(200).json({
            message: `data booklist updated`,
            data: transactions2
          })
        }
      })
    })
  }
}
