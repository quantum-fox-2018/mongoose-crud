const Transaction = require('../models/transaction')

module.exports = {
  getAll : function(req,res){
    Transaction.find()
    .populate('bookList')
    .populate('member')
    .exec().then(response=>{
      res.status(200).json({
        message : 'success get data',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'get data failed',
        err
      })
    })
  },



  getOne : function(req,res){
    Transaction.findById(req.params.id).exec().then(response=>{
      res.status(200).json({
        message : 'success get data by id',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'get data by id failed',
        err
      })
    })
  },


  addTransaction : function(req,res){
    let dueDate    = new Date()
    dueDate.setDate(dueDate.getDate() + Number(req.body.days))

    let newTransaction = new Transaction({
      member     : req.body.member,
      days       : req.body.days,
      out_date   : new Date(),
      due_date   : dueDate,
      in_date    : req.body.in_date,
      fine       : req.body.fine,
      bookList   : req.body.bookList
    })

    newTransaction.save().then(response=>{
      res.status(200).json({
        message : 'success insert data',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'insert error',
        err
      })
    })
  },


  removeTransaction : function(req,res){

    Transaction.findByIdAndRemove(req.params.id).then(response=>{
      res.status(200).json({
        message : 'delete success',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'delete error',
        err
      })
    })
  },

  updateTransaction : function(req,res){
    let dueDate    = new Date()
    dueDate.setDate(dueDate.getDate() + Number(req.body.days))
    
    Transaction.update({_id:req.params.id}, {
      member     : req.body.member,
      days       : req.body.days,
      out_date   : new Date(),
      due_date   : dueDate,
      in_date    : req.body.in_date,
      fine       : req.body.fine,
      bookList   : req.body.bookList
    }).then(response=>{
      res.status(200).json({
        message : 'update success',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'update error',
        err
      })
    })

  },


}
