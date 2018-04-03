var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var bookschema = new Schema({
  isbn:  String,
  title: String,
  author:   String,
  category: String,
  stock:   Number,
  createdAt:
  {
    type: Date,
    default: Date.now
  }
});

const Books = mongoose.model('books',bookschema)
module.exports= Books
