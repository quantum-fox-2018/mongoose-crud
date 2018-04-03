const Book = require('../models/books')
const ObjectId = require('mongodb').ObjectID

module.exports = {
  create: (req,res) => {
    const newBook = new Book(req.body)
    newBook.save(err => {
      if (err){
        return res.status(500).json({
        err: err.message
        })
      } else {
        return res.status(200).json({
          message:"inserted new book",
          book: req.body
        })
      }
    })
  },
  findAll: (req,res) =>{
    Book.find((err, books) => {
      if(err){
        return res.status(500).json({
          err: err.message
        })
      } else {
        return res.status(200).json({
          message:"this is all data",
          books
        })
      }
    })
  },
  update: (req,res)=>{
    Book.update({
      _id: ObjectId(req.params.id)
    },{
      $set: req.body
    },(err, books)=>{
      if(err){
        res.status(500).json({
          message: `this is error`
        })
      } else {
        res.status(200).json({
          message: `data updated`,
          data: books
        })
      }
    })
  },
  delete: (req,res)=>{
    Book.findByIdAndRemove({
      _id: ObjectId(req.params.id)
    },(err, books)=>{
      if(err){
        res.status(500).json({
          message: `this is error`
        })
      } else {
        res.status(200).json({
          message: `data deleted`,
          data: books
        })
      }
    })
  }
}
