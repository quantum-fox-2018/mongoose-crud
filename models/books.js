const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
    title: {
      type: String,
      required: [true, 'Title required']
    },
    author: {
      type: String,
      required: [true, 'Author required']
    },
    isbn: {
      type: String,
      required: [true, 'Isbn number required']
    },
    category: {
      type: String,
      required: [true, 'Category required']
    },
    stock: {
      type: Number,
      required: [true, 'Stock required']
    }
  });

let book = mongoose.model('books', bookSchema);

module.exports = book
