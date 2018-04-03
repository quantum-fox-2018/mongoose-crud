const ModelBook = require('../models/m_books');
const ObjectId = require('mongodb').ObjectID;

class ControllerBook {

    static showBooks(req,res) {
        ModelBook.find(function(err, books) {
            
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })

            } else {
                res.status(200).json({
                    message: "Show books success",
                    books: books
                })
            }
        })
    }


    static addBooks(req,res) {
        const newBook = new ModelBook(req.body)

        newBook.save(function(err, result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })

            } else {
                res.status(200).json({
                    message: "Add books success",
                    books: result
                })
            }
        })
    }


    static updateBooks(req,res) {
        const id = req.params.id;

        ModelBook.update({_id:ObjectId(id)}, {$set:req.body}, function(err,result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })
            } else {
                res.status(200).json({
                    message: "Update books success",
                    book: result
                })
            }
        })
    }


    static deleteBooks(req,res) {
        const id = req.params.id;

        ModelBook.deleteOne({_id:ObjectId(id)}, function (err, result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })
            } else {
                res.status(200).json({
                    message: "Delete books success",
                    book: result
                })
            }
        })
    }

    


}


module.exports = ControllerBook;