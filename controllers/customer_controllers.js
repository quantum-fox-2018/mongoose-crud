const customers = require('../model/customers');
const ObjectID = require('mongodb').ObjectID;

module.exports = {
    showAllCustomer: function(req, res){
        customers
            .find()
            .exec()
            .then(function(customerData){
                res.status(200).json({
                    message: "success get all customer data",
                    result: customerData
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    createNewCustomer: function(req, res){
        customers
            .create({
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.zipcode
            })
            .then(function(result){
                res.status(200).json({
                    message: "success added new customer",
                    result: result
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    updateCustomer: function(req, res){
        customer
            .bulkWrite([{
                updateOne: {
                    filter: {'_id': ObjectID(req.params.id)},
                    update: {
                        name: req.body.name,
                        memberid: req.body.memberid,
                        address: req.body.address,
                        zipcode: req.body.zipcode,
                        phone: req.body.zipcode
                    }
                }
            }])
            .then(function(result){
                res.status(201).json({
                    message: "success update data",
                    result: result
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    deleteCustomer: function(req, res){
        customers
            .bulkWrite([{
                deleteOne: {
                    filter: {'_id': ObjectID(req.params.id)}
                }
            }])
            .then(function(result){
                res.status(201).json({
                    message: "Success delete data!",
                    result: result
                })
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
    },
    showOneCustomer: function(req, res){
        customers
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