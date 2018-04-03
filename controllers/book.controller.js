var mongoose = require('mongoose');

const Book = require('../models/book');

module.exports = 
{
    addNewBook: function(req, res){       
        Book.create(
            { 
                isbn: req.body.isbn,
                title:req.body.title,
                author:req.body.author,
                category:req.body.category,
                stock:req.body.stock,
            }
         )
         .then((result)=>{
            res.status(200).json({
                message: 'success add new book',
                result: result
            });
         })
         .catch((err)=>{
            res.status(500).json({
                message: 'server error'
            });
         });
    },

    showAllBook: function(req, res){
        Book.find()
        .then((result)=>{
            res.status(200).json({
                message: 'success get all book',
                result: result
            });
         })
         .catch((err)=>{
            res.status(500).json({
                message: 'server error'
            });
         });
    },

    updateBookById: function(req,res){
        let id = mongoose.Types.ObjectId(req.params.id);
        Book.updateOne(
            {_id : id},
            req.body
        )
        .then((result)=>{
            res.status(200).json({
                message: 'success update book',
                result: result
            });
         })
         .catch((err)=>{
            res.status(500).json({
                message: 'server error'
            });
         });
    },

    deleteBookById: function(req, res){
        let id = mongoose.Types.ObjectId(req.params.id);
        Book.deleteOne({_id : id})
        .then((result)=>{
            res.status(200).json({
                message: 'success delete book',
                result: result
            });
         })
         .catch((err)=>{
            res.status(500).json({
                message: 'server error'
            });
         });
    }
    
};
 
