const Book = require('../models/books')

module.exports = {
  getAllBook: (req, res) =>{
    Book.find().exec().then(dataBook =>{
      res.status(200).json({
        message: "success get all books",
        dataBook
      })
    }).catch(error =>{
      res.status(400).json({
        message: "failed get book list",
        error
      })
    })
  },
  addBook: (req, res) => {
    let input = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    Book.create(input, (error,newBook) => {
      if(!error){
        res.status(201).json({
          message: "success add new book",
          book: input
        })
      }else{
        res.status(400).json({
          message: "failed add new book",
          error
        })
      }
    })
  },
  deleteBook: (req, res) => {
    let id = {_id:req.params.id}
    Book.findOneAndRemove(id, (error, removedbook) =>{
      if(!error) {
        res.status(201).json({
          message: "success remove a book",
          removedbook
        })
      }else{
        res.status(400).json({
          message: "remove book failed",
          error
        })
      }
    })
  },
  editBook: (req, res) =>{
    let id = {_id: req.params.id}
    Book.findOneAndUpdate(id,req.body,(error, databeforeupdate) => {
      if(!error) {
        res.status(201).json({
          message: "success edit a book"
        })
      }else{
        res.status(400).json({
          message: "edit book failed",
          error
        })
      }
    })
  }
}