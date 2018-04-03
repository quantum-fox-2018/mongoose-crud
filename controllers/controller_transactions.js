const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const transaction = require('../models/transactions');
const mongoose = require('mongoose');

module.exports = {

    getData: function(req, res){

        transaction.find()
            .populate('booklist')
            .populate('member')
            .exec()
            .then((result) => {
                res.status(200).json({
                    message: "success",
                    transactions: result
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
            member: req.body.member,
            days: req.body.days,
            out_date: new Date(),
            due_date: new Date(new Date().getTime()+((req.body.days)*24*60*60*1000)),
            in_date:  new Date(new Date().getTime()+((req.body.return)*24*60*60*1000)), 
            fine: null,
            booklist: req.body.booklist    
        }
        
        let newtransaction = new transaction(newData)

        newtransaction.fine = req.body.fine*(Math.abs(newtransaction.in_date.getDate() - newtransaction.due_date.getDate()))

        newtransaction.save((err, result)=>{
            if (err){
                res.status(500).json({
                    message: err.message
                })
            } else{                   
                res.status(201).json({
                    message: "success add transaction",
                    result: result
                })
            }  
        })
    },
    editData: function(req, res){
        
        let updateData = {      
            member: req.body.member,
            days: req.body.days,
            due_date: new Date(new Date().getTime()+((req.body.days)*24*60*60*1000)),
            in_date:  new Date(new Date().getTime()+((req.body.return)*24*60*60*1000)), 
            fine: null,
            booklist: req.body.booklist    
        }
        
        updateData.fine = req.body.fine*(Math.abs(updateData.in_date.getDate() - updateData.due_date.getDate()))

        let getId = mongoose.Types.ObjectId(req.params.id);
        
        transaction.findOneAndUpdate({_id: getId}, updateData)
            .then((result) => {
                res.status(200).json({
                    message: "success edit",
                    transactions: result
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
        
        transaction.deleteOne({_id: getId})
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