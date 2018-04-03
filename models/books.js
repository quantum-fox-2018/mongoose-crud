const mongoose = require('mongoose');

let bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author:String,
  Category: String,
  stock: Number
},{
  timestamps: true
})

let book = mongoose.model('book', bookSchema)

module.exports = book;
