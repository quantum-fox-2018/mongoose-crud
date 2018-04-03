const transaction = require('../models/transaction.model')

module.exports = {
    getAllTransactions (req, res) {
        transaction
            .find()
            .populate('booklist')
            .populate('member')
            .exec()
            .then(response => {
                res.status(200).send({
                    message: 'query transactions success',
                    data: response
                })
            })
            .catch(err => {
                res.status(400).send({
                    message: err
                })
            })
    },
    getOneTransaction (req, res) {
        const {id} = req.params
        transaction.findById(id, (err, transaction) => {  
            if (!err) {
                res.status(201).send({
                    message: 'query transaction success',
                    transaction
                })
            } else {
                res.status(400).send({
                    message: 'query transaction failed'
                })
            }
        });
    },
    createTransaction (req, res) {
        const {member, days, out_date, due_date, in_date, fine, booklist} = req.body
        let newTransaction = new transaction({
            member, days, out_date, due_date, in_date, fine, booklist
        })

        newTransaction.save((err, result) => {
            if (!err) {
                res.status(201).send({
                    message: 'create transaction success',
                    data: result
                })
            } else {
                res.status(400).send({
                    message: err
                })
            }
        })
    },
    deleteTransaction (req, res) {
        const {id} = req.params
        transaction.findByIdAndRemove(id, (err, todo) => {
            if(!err) {
                res.status(200).send({
                    message: 'delete transaction success',
                    data: todo
                })
            } else {
                res.status(400).send({
                    message: 'delete transaction failed'
                })
            }
        })
    },
    // updateTransaction (req, res) {
    //     const {id} = req.params
    //     const {member, days, out_date, due_date, in_date, fine} = req.body
    //     transaction.findByIdAndUpdate(id, {
    //         $push: {
    //             booklist: req.body.booklist
    //         },
    //         $set: {
    //             member, days, out_date, due_date, in_date, fine
    //         }
    //     }, {new: true}, (err, todo) => {
    //         if(!err) {
    //             res.status(200).send({
    //                 message: 'update transaction success',
    //                 data: todo
    //             })
    //         } else {
    //             res.status(400).send({
    //                 message: 'update transaction failed'
    //             })
    //         }
    //     })
    // },
    updateTransaction (req, res) {
        const {id} = req.params
        let objUpdate = {};
        for(var property in req.body) {
            objUpdate[property] = req.body[property];
        }
        transaction.update(
        {
            _id: id
        },
        {
            $push: {
                booklist: req.body.booklist
            },
            $set: objUpdate
        },
        {
            overwrite: false
        },
        function (err, transaction) {
            if(!err) {
                res.status(200).send({
                    message: 'update transaction success',
                    data: transaction
                })
            } else {
                res.status(400).send({
                    message: 'update transaction failed'
                })
            }
        });
    }
}