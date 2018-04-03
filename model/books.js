const mongoose = require('mongoose');
const Schema = mongoose.Schema

let bookSchema = mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    category: String,
    stokc: Number
}, {
    timestamps: true
})

let book = mongoose.model('book', bookSchema);

module.exports = book;