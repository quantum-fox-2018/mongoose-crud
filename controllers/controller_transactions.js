const transaction = require('../models/transactions');
const book = require('../models/books');
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
        })
        
    },
    addTransaction: function(req, res){      

        let newData = {      
            member: req.body.member,
            days: req.body.days,
            out_date: new Date(),
            due_date: new Date(new Date().getTime()+((req.body.days)*24*60*60*1000)),
            in_date:  new Date(new Date().getTime()+((req.body.days)*24*60*60*1000)), 
            fine: req.body.fine,
            booklist: req.body.booklist    
        }
        
        let newtransaction = new transaction(newData)

        newtransaction.save((err, result)=>{
            if (err){
                res.status(500).json({
                    message: err.message
                })
            } else{
                result.booklist.forEach(bookId => {
                    var getId = mongoose.Types.ObjectId(bookId);
                    book.findOne({_id: getId})
                        .exec()
                        .then(data_book=>{
                            let newStock = {stock: data_book.stock - 1}
                            data_book.update(newStock)
                                .then(result=>{
                                    console.log(result);    
                                })
                                .catch(err=>{
                                    console.log(err)
                                })
                        })
                        
                });

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
            in_date:  new Date(new Date().getTime()+((req.body.days)*24*60*60*1000)), 
            fine: req.body.fine,
            booklist: req.body.booklist    
        }
        
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
        })
    },
    returnBook: function(req, res){

       let getId = mongoose.Types.ObjectId(req.params.id);

       transaction.findOne({_id: getId})
                  .exec()
                  .then(data_transaction=>{

                    let updateData = {
                        in_date: new Date(new Date().getTime()+((req.body.return)*24*60*60*1000))
                    }           
                    let diffDate = updateData.in_date.getDate() - data_transaction.due_date.getDate()
                    if(diffDate>0){
                        updateData.fine = data_transaction.fine*(diffDate)
                    }else{
                        updateData.fine = 0;
                    }
                    
                    data_transaction.update(updateData)
                                    .then(result=>{
                                        data_transaction.booklist.forEach(bookId => {
                                            var getId = mongoose.Types.ObjectId(bookId);
                                            book.findOne({_id: getId})
                                                .exec()
                                                .then(data_book=>{
                                                    let newStock = {stock: data_book.stock + 1}
                                                    data_book.update(newStock)
                                                        .then(result=>{
                                                            console.log(result);    
                                                        })
                                                        .catch(err=>{
                                                            console.log(err)
                                                        })
                                                })     
                                        });

                                        res.status(200).json({
                                            message: "success return book",
                                            result
                                        })
                                    })
                                    .catch(err=>{
                                        res.status(500).json({
                                        message: err.message
                                        })
                                    })      
                  })
                  .catch(err=>{
                        res.status(500).json({
                        message: err.message
                        })
                    })
    }
}