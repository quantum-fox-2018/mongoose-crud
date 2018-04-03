const Books = require('../models/book.model')

module.exports = {

    getAllData : function(req, res) {
        Books.find(function(err, response) {
            if(!err) {
                res.status(200).json({
                    message: 'data berhasil didapatkan',
                    response
                })
            } else {
                res.status(500).json({
                    message: 'test connection anda'
                })
            }
        })
    },

    createData : function(req, res) {
        Books.create({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        }, function(err, response) {
            if(!err){
                res.status(201).json({
                    message: 'data berhasil ditambahkan',
                    data: response
                })
            } else {
                res.status(500).json({
                    message: 'test connection anda'
                })
            }
        })
    },

    updateData : function(req, res) {
        Books.update({
            _id: req.params.id
        } ,{
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        } ,function(err, response) {
            res.status(201).json({
                message: 'data berhasil du update',
                response
            })
        })
    },

    deleteData : function(req, res) {
        Books.deleteOne({
            _id: req.params.id
        }, function(err, response) {
            if(!err){
                res.status(200).json({
                    message: 'Data berhasil dihapus'
                })
            } else {
                res.status(500).json({
                    message: 'Test connection anda'
                })
            }
        })
    }


    
}