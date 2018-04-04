const book = require('../models/book.model')

module.exports = {
    getAllBooks (req, res) {
        book
            .find()
            .exec()
            .then(response => {
                res.status(200).send({
                    message: 'query books success',
                    data: response
                })
            })
            .catch(err => {
                res.status(400).send({
                    message: err
                })
            })
    },
    getOneBook (req, res) {
        const {id} = req.params
        book.findById(id, (err, book) => {  
            if (!err) {
                res.status(201).send({
                    message: 'query book success',
                    book
                })
            } else {
                res.status(400).send({
                    message: 'query book failed'
                })
            }
        });
    },
    createBook (req, res) {
        const {isbn, title, author, category, stock} = req.body
        let newBook = new book({
            isbn, title, author, category, stock
        })

        newBook.save((err, result) => {
            if (!err) {
                res.status(201).send({
                    message: 'create book success',
                    data: result
                })
            } else {
                res.status(400).send({
                    message: err.message
                })
            }
        })
    },
    deleteBook (req, res) {
        const {id} = req.params
        book.findByIdAndRemove(id, (err, todo) => {
            if(!err) {
                res.status(200).send({
                    message: 'delete book success',
                    data: todo
                })
            } else {
                res.status(400).send({
                    message: 'delete book failed'
                })
            }
        })
    },
    updateBook (req, res) {
        const {id} = req.params
        book.findByIdAndUpdate(id, req.body, {new: true}, (err, todo) => {
            if(!err) {
                res.status(200).send({
                    message: 'update book success',
                    data: todo
                })
            } else {
                res.status(400).send({
                    message: 'update book failed'
                })
            }
        })
    }
}