const mongoose = require('mongoose')

let booksSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
}, {
  timestamps: true
})

let books = mongoose.model('books', booksSchema)

module.exports = books;
