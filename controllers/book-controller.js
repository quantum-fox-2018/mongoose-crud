const Book      = require('../models/book-model')
const mongoose  = require('mongoose')

module.exports = {
    findAll: (req, res) => {
        Book.find()
        .exec()
        .then((bookList) => {
            res.status(200).json({
                message: 'Get All Books Data....',
                data: bookList
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: `read data error..! with error: ${err}`
            })
        })
    },

    findById : (req,res) => {
        Book.findOne({
            _id : req.params.id
        }, {

        })
        .exec()
        .then((book) => {
            res.status(200).json({
                message: `succes get data ID: "${req.params.id}"`,
                data: book
            })
        })
        .catch(err=>{
            res.status(400).json({
                message: `fail to get data ! err : ${err}`
            })
        })
    },

    addBook: (req, res) => {
        Book.create({
            isbn     : req.body.isbn,
            title    : req.body.title,
            author   : req.body.author,
            category : req.body.category,
            stock    : req.body.stock
        },(err, newBook) => {
            if(err){
                res.status(400).json({
                    message: `add new Book error.! with error: ${err}`
                })
            }
            res.status(200).json({
                message: 'add new Book has been success',
                data: newBook
            })
        })
    },

    update: (req, res) => {
        let objBook = {
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }

        Book.findByIdAndUpdate(req.params.id, { $set: objBook},(err, book) => {
            if (err) {
                res.status(400).json({
                    message: `failed to update data ! err : ${err}`
                })
            }

            res.status(200).json({
                message: `success to update data ID: "${req.params.id}`,
                data: book
            })
        })
    },

    delete: (req, res) => {
        Book.findByIdAndRemove(req.params.id,(err, book) => {
            if (err) {
                res.status(400).json({
                    message : `Fail to delete data ! err : ${err}`
                })
            }

            res.status(200).json({
                message : `Success delete data ID: "${req.params.id}`,
                data : book
            })
        })
    }



}