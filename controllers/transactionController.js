const Transaction = require('../models/transactions')

module.exports = {
  getAllTransaction: (req, res) =>{
    Transaction.find()
    .populate('member')
    .populate('booklist')
    .exec()
    .then(dataTransaction => {
      res.status(200).json({
        message: "success get all transactions",
        dataTransaction
      })
    }).catch(error=>{
      res.status(400).json({
        message:"failed get transactions",
        error
      })
    })
  },
  addTransaction: (req,res) =>{
    let input = {
      member: req.body.member,
      days: req.body.days,
      booklist: req.body.booklist
    }
    Transaction.create(input,(error, newTransaction)=>{
      if(!error){
        res.status(201).json({
          message: "success add new transaction",
          newTransaction
        })
      }else{
        res.status(400).json({
          message:"failed add transactions",
          error
        })
      }
    })
  },
  deleteTransaction: (req,res) =>{
    let id = {_id:req.params.id}
    Transaction.findOneAndRemove(id, (err,removedTransaction)=>{
      if(!err){
        res.status(200).json({
          message:"remove transaction success",
          removedTransaction
        })
      }else{
        res.status(400).json({
          message: "remove failed!",
          error: err
        })
      }
    })
  },
  editTransaction: (req, res) =>{
    let id = {_id:req.params.id}
    Transaction.findOneAndUpdate(id,req.body, (err)=>{
      if(!err){
        res.status(200).json({
          message:"edit transaction success"
        })
      }else{
        res.status(400).json({
          message: "edit failed!",
          error: err
        })
      }
    })
  },
  returnBook: (req, res) =>{
    let id = {_id:req.params.id}
    Transaction.findOneAndUpdate(id,req.body, (err)=>{
      if(!err){
        res.status(200).json({
          message:"update transaction success"
        })
      }else{
        res.status(400).json({
          message: "edit failed!",
          error: err
        })
      }
    })
  }
}