const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stock: Number
})

var Book = mongoose.model('book', schema)

module.exports = Book