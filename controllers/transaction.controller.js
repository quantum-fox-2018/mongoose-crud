const Transaction = require('../models/transaction.model')
const mongoose = require('mongoose')

module.exports = {

    getAllData : function(req, res) {
        Transaction.find(function(err, response) {
            if(!err) {
                res.status(200).json({
                    message: 'data berhasil didapatkan',
                    response
                })
            } else {
                res.status(500).json({
                    message: err.message
                })
            }
        })
        .populate('member')
        .populate('booklist')
    },

    createData : function(req, res) {
        let memberID = mongoose.Types.ObjectId(req.body.member)
        let bookID = mongoose.Types.ObjectId(req.body.booklist)

        // console.log(bookID)

        Transaction.create({
            member: memberID,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: bookID
            // booklist: bookID
        }, function(err, response) {
            if(!err){
                res.status(200).json({
                    message: 'Data berhasil dimasukkan',
                    response
                })
            } else {
                res.status(500).json({
                    message: 'Create error',
                    err
                })
            }
        })
    },

    updateData : function(req, res) {
        let memberID = mongoose.Types.ObjectId(req.body.member)
        let bookID = mongoose.Types.ObjectId(req.body.booklist)

        Transaction.update({
            _id: req.params.id
        } ,{
            member: memberID,
            days: req.body.days,
            out_date: req.body.out_date,
            due_date: req.body.due_date,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: bookID
        } ,function(err, response) {
            res.status(201).json({
                message: 'data berhasil di update',
                response
            })
        })
    },

    deleteData : function(req, res) {
        Transaction.deleteOne({
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