const customer = require('../models/customer.model')

module.exports = {
    getAllCustomers (req, res) {
        customer
            .find()
            .exec()
            .then(response => {
                res.status(200).send({
                    message: 'query customers success',
                    data: response
                })
            })
            .catch(err => {
                res.status(400).send({
                    message: err
                })
            })
    },
    getOneCustomer (req, res) {
        const {id} = req.params
        customer.findById(id, (err, customer) => {  
            if (!err) {
                res.status(201).send({
                    message: 'query customer success',
                    customer
                })
            } else {
                res.status(400).send({
                    message: 'query customer failed'
                })
            }
        });
    },
    createCustomer (req, res) {
        const {name, memberid, address, zipcode, phone} = req.body
        let newCustomer = new customer({
            name, memberid, address, zipcode, phone
        })

        newCustomer.save((err, result) => {
            if (!err) {
                res.status(201).send({
                    message: 'create customer success',
                    data: result
                })
            } else {
                res.status(400).send({
                    message: 'create customer failed'
                })
            }
        })
    },
    deleteCustomer (req, res) {
        const {id} = req.params
        customer.findByIdAndRemove(id, (err, todo) => {
            if(!err) {
                res.status(200).send({
                    message: 'delete customer success',
                    data: todo
                })
            } else {
                res.status(400).send({
                    message: 'delete customer failed'
                })
            }
        })
    },
    updateCustomer (req, res) {
        const {id} = req.params
        customer.findByIdAndUpdate(id, req.body, {new: true}, (err, todo) => {
            if(!err) {
                res.status(200).send({
                    message: 'update customer success',
                    data: todo
                })
            } else {
                res.status(400).send({
                    message: 'update customer failed'
                })
            }
        })
    }
}