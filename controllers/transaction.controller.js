var mongoose = require('mongoose');

const Transaction = require('../models/transaction');

module.exports = 
{
    addNewTransaction: function(req, res){
        let due_date = new Date();
        due_date.setDate(due_date.getDate() + Number(req.body.days)); 

        Transaction.create(
            { 
                member: req.body.member,
                days:req.body.days,
                out_date: new Date(),
                due_date: due_date,
                in_date: null,
                fine: 0, 
                booklist: req.body.booklist
            }
         )
         .then((result)=>{
            res.status(200).json({
                message: 'success add new Transaction',
                result: result
            });
         })
         .catch((err)=>{
            res.status(500).json({
                message: 'server error',
                error:err
            });
         });
    },

    showAllTransaction: function(req, res){
        Transaction.find()
        .populate('booklist')
        .populate('member')
        .exec()
        .then((result)=>{
            res.status(200).json({
                message: 'success get all Transaction',
                result: result
            });
         })
         .catch((err)=>{
            res.status(500).json({
                message: 'server error'
            });
         });
    },

    updateTransactionById: function(req,res){
        let id = mongoose.Types.ObjectId(req.params.id);
        Transaction.findOne({_id:id})
        .then((trans)=>{
            let fine = (new Date()) - trans.due_date;
            (fine < 0) ? trans.fine = 0 : trans.fine = Math.abs(fine / 1000); 
            trans.in_date = new Date();
            Transaction.updateOne({_id : id},trans)
            .then((result)=>{
                res.status(200).json({
                    message: 'success update Transaction',
                    result: result
                });
            })
        })
        .catch((err)=>{
            console.log(err)
            res.status(500).json({
                message: 'server error'
            });
        });
    },

    deleteTransactionById: function(req, res){
        let id = mongoose.Types.ObjectId(req.params.id);
        Transaction.deleteOne({_id : id})
        .then((result)=>{
            res.status(200).json({
                message: 'success delete Transaction',
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
 
