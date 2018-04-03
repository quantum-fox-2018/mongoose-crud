const transactions = require('../model/transactions');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    showAllTransaction: function(req, res){
        transactions
            .find()
            .exec()
            .then(function(transactionData){
                res.status(200).json({
                    message: "success get all customer data",
                    result: transactionData
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    createNewTransaction: function(req, res){
        let days = req.body.days
        let checkout = new Date();
        let due_date = new Date(checkout);
        due_date.setDate(Number(due_date.getDate()) + Number(days));
        
        transactions
            .create({
                memberid: req.body.memberid,
                days: days,
                out_date: checkout,
                due_date: due_date,
                in_date: "",
                fine: 0,
                booklist: req.body.bookid,
            })
            .then(function(result){
                res.status(200).json({
                    message: "success added new transaction",
                    result: result
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    returnBook: function(req, res){
        
        let fine = 0;
        transactions
            .findOne({'_id': ObjectID(req.params.id)})
            .exec()
            .then(function(transactionData){
                let daysPassed = Number(new Date()) - Number(transactionData.out_date.getDate())
                fine = daysPassed * 1000
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })

        let returnDate = new Date();

        transactions
            .bulkWrite([{
                updateOne: {
                    filter: {'_id': ObjectID(req.params.id)},
                    update: {
                        in_date: returnDate,
                        fine: fine
                    }
                }
            }])
            .then(function(result){                
                res.status(201).json({
                    message: "success return book",
                    result: result
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    deleteTransaction: function(req, res){
        transactions
            .bulkWrite([{
                deleteOne: {
                    filter: {'_id': ObjectID(req.params.id)}
                }
            }])
            .then(function(result){
                res.status(201).json({
                    message: "Success delete transaction!",
                    result: result
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    showOneTransaction: function(req, res){
        transactions
            .findOne({'_id': ObjectID(req.params.id)})
            .exec()
            .then(function(bookData){
                res.status(201).json({
                    message: "Found the customer!",
                    result: bookData
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    }
}