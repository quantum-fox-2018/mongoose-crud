const ModelTransactions = require('../models/m_transactions');
const ObjectId = require('mongodb').ObjectID;

class ControllerTransaction {

    static showTransactions(req,res) {
        // ModelTransactions.find(function(err,result) {
        //     if (err) {
        //         res.status(500).json({
        //             message: "Internal service error",
        //         })

        //     } else {
        //         res.status(200).json({
        //             message: "Show transactions success",
        //             transactions: result
        //         })
        //     }
        // })

        ModelTransactions.find()
        .populate('member booklist')
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Show transactions success",
                transactions: result
            })
        })
        .catch(err => {
            res.status(500).json({
                message: "Internal service error",
            })  
        })
    }


    static addTransactions(req,res) {
        const newTransaction = new ModelTransactions(req.body)

        newTransaction.save(function(err,result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })

            } else {
                res.status(200).json({
                    message: "Add transactions success",
                    transactions: result
                })
            }
        })
    }


}


module.exports = ControllerTransaction;