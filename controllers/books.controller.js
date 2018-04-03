const bookSchema = require('../models/books.model')

class Books {
  static read (req,res) {
    bookSchema.find()
    .then(books=>{
      res.status(200).json({
        message:'list of books:',
        books
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static create(req,res) {
    let obj = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    bookSchema.create(obj)
    .then(book=>{
      res.status(200).json({
        message:'book created',
        book
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static update(req,res){
    let target = {
      _id:req.params.id
    }
    bookSchema.findOne(target)
    .then(book=>{
      book.isbn = req.body.isbn || book.isbn
      book.title = req.body.title || book.title
      book.author = req.body.author || book.author
      book.category = req.body.category || book.category
      book.stock = req.body.stock || book.stock
      book.save()
      .then(editedBook=>{
        res.status(200).json({
          message:'book updated',
          editedBook
        })
      })
      .catch(err=>{
        res.status(500).json({
          message:'fail to update bood data',
          err
        })
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'your book data cant be found',
        err
      })
    })
  }

  static delete (req,res) {
    let target = {
      _id:req.params.id
    }
    bookSchema.findOneAndRemove(target)
    .then(book=>{
      res.status(200).json({
        message:'book deleted successfully',
        book
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'delete book failed',
        err
      })
    })
  }
}

module.exports = Books