const books = require('../model/books');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    showAllBooks: function(req, res){
        books
            .find()
            .exec()
            .then(function(bookData){
                res.status(200).json({
                    message: "success get all books data",
                    book: bookData
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    createNewBook: function(req, res){
        books
            .create({
                isbn: req.body.isbn,
                title: req.body.title,
                author: req.body.author,
                category: req.body.category,
                stock: req.body.stock
            })
            .then(function(result){
                res.status(200).json({
                    message: "success insert a new book",
                    result: result
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    updateBook: function(req, res){
        books
            .bulkWrite([{
                updateOne: {
                    filter: {'_id': ObjectID(req.params.id)},
                    update: {
                        isbn: req.body.isbn,
                        title: req.body.title,
                        author: req.body.author,
                        category: req.body.category,
                        stock: req.body.stock
                    }
                }
            }])
            .then(function(result){
                res.status(201).json({
                    message: "success update data",
                    result: result
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    deleteBook: function(req, res){
        books
            .bulkWrite([{
                deleteOne: {
                    filter: {'_id': ObjectID(req.params.id)}
                }
            }])
            .then(function(result){
                res.status(201).json({
                    message: "Success delete data!",
                    result: result
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    showOneBook: function(req, res){
        books
            .findOne({'_id': ObjectID(req.params.id)})
            .exec()
            .then(function(bookData){
                res.status(201).json({
                    message: "Found the book!",
                    result: bookData
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    }
}