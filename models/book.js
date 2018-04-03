const mongoose = require('mongoose');
const Schema = mongoose.Schema


let bookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    category : String,
    stock : Number,
},{
  timestamp :true
});

let book = mongoose.model('book',bookSchema)

module.exports = book
