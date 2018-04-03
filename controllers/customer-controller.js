const mongoose  = require('mongoose')
const Customer  = require('../models/customer-model')

module.exports = {
    findAll: (req, res) => {
        Customer.find()
        .exec()
        .then((customer) => {
            res.status(200).json({
                message: 'Get All Customers Data....',
                data: customer
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: `read data error..! with error: ${err}`
            })
        })
    },

    findById: (req, res) => {
        Customer.findOne({
            _id : req.params.id
        })
        .exec()
        .then((customer) => {
            res.status(200).json({
                message : `succes get data ID: "${req.params.id}"`,
                data    : customer
            })
        })
        .catch(err=>{
            res.status(400).json({
                message : `fail to get data ! err : ${err}`
            })
        })
    },

    addCustomer: (req, res) => {
        Customer.create({
            name     : req.body.name,
            memberid : req.body.memberid,
            address  : req.body.address,
            zipcode  : req.body.zipcode,
            phone    : req.body.phone
        }, (err,customer) => {
            if (err) {
                return res.status(400).json({
                    message : `failed to insert data ! err : ${err}`
                })
            }

            res.status(200).json({
                message : `success insert data !`,
                data    : customer
            })

        })
    },

    update: (req, res) => {
        let objCust = {
            name     : req.body.name,
            memberid : req.body.memberid,
            address  : req.body.address,
            zipcode  : req.body.zipcode,
            phone    : req.body.phone
        }

        Customer.findByIdAndUpdate(req.params.id, { $set: objCust }, (err, customer) => {
            if (err) {
                res.status(400).json({
                    message : `failed to update data ! err : ${err}`
                })
            }

            res.status(200).json({
                message : `success to update data ID: "${req.params.id}"`,
                data    : customer
            })
        })
    },

    delete: (req, res) => {
        Customer.findByIdAndRemove(req.params.id,(err, customer) => {
            if (err) {
                res.status(400).json({
                    message : `Fail to delete data ! err : ${err}`
                })
            }

            res.status(200).json({
                message : `Success delete data ID: "${req.params.id}`,
                data : customer
            })
        })
    }

}