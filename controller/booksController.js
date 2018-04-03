const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const ObjectID = require('mongodb').ObjectID;
const books = require('../models/books');

module.exports = {
  showAllBooks: function(req, res) {
    books.find()
         .exec()
         .then(books => {
           res.status(200).json({
             message: "Show all Books",
             books
           })
         })
         .catch(err => {
           res.status(500).json({
             message: err
           })
         })

  },
  newBooks: function(req, res){
    let newBook = new books({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })

    newBook.save((err, books) => {
      if(err){
        res.status(500).json({
          message: err
        })
      }else{
        res.status(201).json({
          message: `Books ${newBook.title} Succesfully added`,
          books
        })
      }
    })
  },
  updateBooks: function(req, res){
    let bookId = req.params.id;
    let bookUpdate = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    // console.log(bookId);
    // console.log(req.body);
    books.findOneAndUpdate({_id:ObjectID(bookId)}, bookUpdate)
         .then(books => {
           res.status(200).json({
             message: `Books with Id ${bookId} Succesfully updated`,
             books
           })
         })
         .catch(err => {
           res.status(500).json({
             message: err
           })
         })
  },
  deleteBooks: function(req, res){
    let bookId = req.params.id;
    // pake findOneAndDelete ga bisa
    books.remove({_id:ObjectID(bookId)})
         .then(results => {
           res.status(200).json({
             message: `Books with id ${bookId} Succesfully deleted`,
             results
           })
         })
         .catch(err => {
           res.status(500).json({
             message: err
           })
         })
  }
}













//
