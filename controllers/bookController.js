const books = require('../models/books');

module.exports = {
  getAll: function(req, res) {
    books
      .find()
      .exec()
      .then(booklist => {
        res.status(200).json({
          message: 'success get data',
          data: booklist
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'failed to get data'
        })
      })
  },
  addBook: function(req,res) {
    let { isbn, title, author, Category, stock } = req.body
    let newBook = new books({
      isbn,
      title,
      author,
      Category,
      stock
    })

    newBook.save((err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json({
          message: 'successfully added a new book !',
          data: result
        })
      }
    })
  },
  updateBook: function(req, res) {
    let id = mongoose.Types.ObjectId(req.params.id)
    let { isbn, title, author, Category, stock } = req.body
    books.findByIdAndUpdate(id, {
      isbn,
      title,
      author,
      Category,
      stock
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
  },
  deleteBook: function(req, res) {
    let id = mongoose.Types.ObjectId(req.params.id)
    books.findOneAndRemove({ _id: id })
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
