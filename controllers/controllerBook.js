const Book = require('../models/modelBook')

module.exports = {
  findAll: function(req, res) {
    Book.find()
    .then(dataBook => {
      res.status(200).send({
        message: 'Show all data',
        data: dataBook
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'Data not found',
        detail: err.message
      })
    })
  },

  addNew: function(req, res) {
    let newBook = new Book({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })

    newBook.save(newBook)
    .then(success => {
      res.status(201).send({
        message: 'Add data success',
        data: newBook
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'Add data failed',
        detail: err.message
      })
    })
  },

  updateData: function(req, res) {
    Book.findOneAndUpdate({
      _id: req.params.id
    },{
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    } )
    .then(success => {
      res.status(201).send({
        message: 'Update data success',
        data: req.body
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'Update data failed',
        detail: err.message
      })
    })
  },

  deleteData: function(req, res) {
    Book.deleteOne({
      _id: req.params.id
    })
    .then(success => {
      res.status(200).send({
        message: 'Delete data success',
        detail: success
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'Delete data failed',
        detail: err.message
      })
    })
  }
}