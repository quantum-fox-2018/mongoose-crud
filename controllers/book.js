const Book = require('../models/book')

module.exports = {
  findAll(req, res) {
    Book.find()
    .then(books => {
      res.status(200).json({
        message: 'success read books',
        data: books
      })
    })
    .catch(err => {
      res.status(500).json( {message: 'error database'} )
    })
  },

  createData(req, res) {
    let { isbn, title, author, category, stock } = req.body
    let newBook = new Book({isbn, title, author, category, stock})

    newBook.save((err, book) => {
      if(err) {
        res.status(500).json( {message: 'error database'} )
      } else {
        res.status(201).json({
          message: 'success insert book',
          data: book
        })
      }
    })
  },

  updateData(req, res) {
    let idObj = req.params.id
    Book.findById(idObj, (err, book) => {
      if(err) {
        res.status(500).json( {message: 'error database'} )
      } else {
        book.isbn = req.body.isbn
        book.title = req.body.title
        book.author = req.body.author
        book.category = req.body.category
        book.stock = req.body.stock

        book.save((err, book) => {
          if(err) {
            res.status(500).json( {message: 'error database'} )
          } else {
            res.status(201).json({
              message: 'success update book',
              data: book
            })
          }
        })
      }
    })
  },

  deleteData(req, res) {
    let idObj = req.params.id
    Book.findById(idObj, (err, book) => {
      book.remove((err, info) => {
        if(err) {
          res.status(500).json( {message: 'error database'} )
        } else {
          res.status(201).json({
            message: 'success delete book',
            data: info
          })
        }
      })
    })
  }
}