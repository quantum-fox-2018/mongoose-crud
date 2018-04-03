const ModelCustomer = require('../models/m_customers');
const ObjectId = require('mongodb').ObjectID;

class ControllerCustomer {

    static showCustomers(req,res) {
        ModelCustomer.find(function(err,result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })

            } else {
                res.status(200).json({
                    message: "Show customer success",
                    customers: result
                })
            }
        })
    }


    static addCustomers(req,res) {
        const newCustomer = new ModelCustomer(req.body);

        newCustomer.save(function(err,result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })

            } else {
                res.status(200).json({
                    message: "Add customers success",
                    customers: result
                })
            }
        })
    }
    
    
    static updateCustomers(req,res) {
        const id = req.params.id;

        ModelCustomer.update({_id:ObjectId(id)}, {$set:req.body}, function(err, result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })

            } else {
                res.status(200).json({
                    message: "Update customers success",
                    customers: result
                })
            }
        })        
    }


    static deleteCustomers(req,res) {
        const id = req.params.id;

        ModelCustomer.deleteMany({_id:ObjectId(id)}, function(err, result) {
            if (err) {
                res.status(500).json({
                    message: "Internal service error",
                })

            } else {
                res.status(200).json({
                    message: "Delete customers success",
                    customers: result
                })
            }
        })
    }


}


module.exports = ControllerCustomer;