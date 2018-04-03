const transactionSchema = require('../models/transactions.model')


class Transaction{
  static read(req,res){
    transactionSchema.find()
    .populate('booklist')
    .populate('member')
    .exec()
    .then(transactions=>{
      res.status(200).json({
        message:'this is list of transactions:',
        transactions
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }
  static create(req, res) {
    let days = req.body.days
    let out = new Date()
    let due = out.setDate(out.getDate()+Number(days))
    let obj = {
      member:req.body.member,
      days:days,
      out_date: out,
      due_date: due,
      in_date:null,
      fine:0,
      booklist:req.body.booklist || []
    }
    transactionSchema.create(obj)
    .then(transaction=>{
      res.status(200).json({
        message:'transaction created successfully',
        transaction
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static return(req,res) {
    let target = {
      _id:req.params.id
    }
    transactionSchema.findOne(target)
    .then(transaction=>{
      let fineDays = new Date(req.body.in_date) - transaction.due_date
      if(fineDays < 0){
        fineDays = 0
      }
      transaction.in_date = req.body.in_date
      transaction.fine = fineDays*1000*transaction.booklist.length
      transaction.save()
      .then(updatedTransaction=>{
        res.status(200).json({
          message:'return book success',
          updatedTransaction
        })
      })
      .catch(err=>{
        res.status(500).json({
          message:'something went wrong',
          err
        })
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'transaction is not found',
        err
      })
    })
  }

  static delete(req,res){
    let target = {
      _id:req.params.id
    }
    transactionSchema.findOneAndRemove(target)
    .then(transaction=>{
      res.status(200).json({
        message:'transaction removed successfully',
        transaction
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }
}

module.exports = Transaction