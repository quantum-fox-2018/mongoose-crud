const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const book = require('../models/books');
const mongoose = require('mongoose');



module.exports = {

    getData: function(req, res){

        book.find()
            .exec()
            .then((result) => {
          
                res.status(200).json({
                    message: "success",
                    books: result
                })
            }).catch(err=>{
            res.status(500).json({
                message: err.message
            })
            client.close()
        })
        
    },
    addData: function(req, res){      

        let newData = {      
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock        
        }
        
        let newBook = new book(newData)
                
        newBook.save((err, result)=>{
            if (err){
                res.status(500).json({
                    message: err.message
                })
            } else{                   
                res.status(201).json({
                    message: "success add book",
                    result: result
                })
            }  
        })
    },
    editData: function(req, res){

        let updateData = {
            stock: req.body.stock,
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category
        }

        let getId = mongoose.Types.ObjectId(req.params.id);
        
        book.findOneAndUpdate({_id: getId}, updateData)
            .then((result) => {
                res.status(200).json({
                    message: "success edit",
                    books: result
                })
            }).catch(err=>{
                res.status(500).json({
                message: err.message
            })
            client.close()
        })
    },
    deleteData: function(req, res){

        let getId = mongoose.Types.ObjectId(req.params.id);
        
        book.deleteOne({_id: getId})
            .then((result) => {
                res.status(200).json({
                    message: "success delete",
                })
            }).catch(err=>{
                res.status(500).json({
                message: err.message
            })
            client.close()
        })
    }
}