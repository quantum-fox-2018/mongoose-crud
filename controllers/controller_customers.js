const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const customer = require('../models/customers');
const mongoose = require('mongoose');

module.exports = {

    getData: function(req, res){

        customer.find()
            .exec()
            .then((result) => {
                res.status(200).json({
                    message: "success",
                    customers: result
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
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone       
        }
        
        let newcustomer = new customer(newData)  
        newcustomer.save((err, result)=>{
            if (err){
                res.status(500).json({
                    message: err.message
                })
            } else{                   
                res.status(201).json({
                    message: "success add customer",
                    result: result
                })
            }  
        })
    },
    editData: function(req, res){

        let updateData = {      
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone       
        }
        
        let getId = mongoose.Types.ObjectId(req.params.id);
        
        customer.findOneAndUpdate({_id: getId}, updateData)
            .then((result) => {
                res.status(200).json({
                    message: "success edit",
                    customers: result
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
        
        customer.deleteOne({_id: getId})
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