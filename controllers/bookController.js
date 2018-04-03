const Book = require('../models/book')

module.exports = {
  getAll : function(req,res){
    Book.find().exec().then(response=>{
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
    Book.findById(req.params.id).exec().then(response=>{
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

  addBook : function(req,res){

    let newBook = new Book({
      isbn : req.body.isbn,
      title : req.body.title,
      author : req.body.author,
      category : req.body.category,
      stock : req.body.stock,
    })

    newBook.save().then(response=>{
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


  removeBook : function(req,res){

    Book.findByIdAndRemove(req.params.id).then(response=>{
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

  updateBook : function(req,res){

    Book.update({_id:req.params.id}, {
      isbn : req.body.isbn,
      title : req.body.title,
      author : req.body.author,
      category : req.body.category,
      stock : req.body.stock,
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

  }


}
