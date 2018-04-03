const mongoose  = require('mongoose')
const Transaction = require('../models/transaction-model')

module.exports = {
    findAll: (req, res) => {
        Transaction.find()
        .populate('booklist')
        .populate('member')
        .exec()
        .then((transaction) => {
            res.status(200).json({
                message: 'success get all data !',
                data: transaction
            })
        })
        .catch(err => {
            res.status(400).json({
                message: `failed to get all data ! err : ${err}`
            })
        })
    },

    findById: (req, res) => {
        Transaction.findOne({
            _id : req.params.id
        })
        .populate('booklist')
        .populate('member')
        .exec()
        .then((transaction) => {
            res.status(200).json({
                message : `succes get data ID: "${req.params.id}"`,
                data    : transaction
            })
        })
        .catch(err=>{
            res.status(400).json({
                message : `fail to get data ! err : ${err}`
            })
        })
    },

    addTransaction : (req,res) => {
        let dueDate = new Date()
        dueDate.setDate(dueDate.getDate() + Number(req.body.days))

        Transaction.create({
            member: req.body.member,
            days: req.body.days,
            out_date: new Date(),
            due_date: dueDate,
            in_date: req.body.in_date,
            fine: req.body.fine,
            booklist: req.body.booklist
        }, (err,transaction) => {
            if (err) {
                return res.status(400).json({
                    message : `failed to insert data ! err : ${err}`
                })
            }

            res.status(200).json({
                message : `success insert data !`,
                data    : transaction
            })

        })
    },

    update: (req, res) => {
        let idTrans = req.params.id
        let dueDate = new Date()
        dueDate.setDate(dueDate.getDate() + Number(req.body.days))
        

        Transaction.findById(idTrans, (err, transaction) => {
            if(err){
                res.status(400).json({
                    message : 'Error Find ID Not Found'
                })
            }

                transaction.member = req.body.member
                transaction.days = req.body.days
                transaction.due_date = dueDate
                transaction.in_date = req.body.in_date
                transaction.fine = req.body.fine
                transaction.booklist = req.body.booklist
            
            Transaction.save((err, transaction) => {
                if (err) {
                    res.status(400).json({
                        message : `failed to update data ! err : ${err}`
                    })
                }
    
                res.status(200).json({
                    message : `success to update data ID: "${req.params.id}"`,
                    data    : transaction
                })
            })

        })

    },

    delete: (req, res) => {
        Transaction.findByIdAndRemove(req.params.id,(err, transaction) => {
            if (err) {
                res.status(400).json({
                    message : `Fail to delete data ! err : ${err}`
                })
            }

            res.status(200).json({
                message : `Success delete data ID: "${req.params.id}`,
                data : transaction
            })
        })
    }



}