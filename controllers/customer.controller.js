const Customer = require('../models/customer.model')

module.exports = {

    getAllData : function(req, res) {
        Customer.find(function(err, response) {
            if(!err) {
                res.status(200).json({
                    message: 'data berhasil didapatkan',
                    response
                })
            } else {
                res.status(500).json({
                    message: 'test connection anda'
                })
            }
        })
    },

    createData : function(req, res) {
        Customer.create({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        }, function(err, response) {
            if(!err){
                res.status(201).json({
                    message: 'data berhasil ditambahkan',
                    data: response
                })
            } else {
                res.status(500).json({
                    message: 'test connection anda'
                })
            }
        })
    },

    updateData : function(req, res) {
        Customer.update({
            _id: req.params.id
        } ,{
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
        } ,function(err, response) {
            res.status(201).json({
                message: 'data berhasil du update',
                response
            })
        })
    },

    deleteData : function(req, res) {
        Customer.deleteOne({
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