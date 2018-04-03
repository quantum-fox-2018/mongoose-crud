var mongoose = require('mongoose');

const Customer = require('../models/Customer');

module.exports = 
{
    addNewCustomer: function(req, res){
        let new_memberid;
        Customer.count({},function (err, count) {
            switch(true){
                case count > 99:
                    new_memberid = 'CL' + count;
                    break;
                case count > 9:
                    new_memberid = 'CL0' + count;
                    break;
                default:
                    new_memberid = 'CL00' + count;
                    break;
            }

            let new_customer = new Customer(
                { 
                    name: req.body.name,
                    memberid: new_memberid,
                    address: req.body.address,
                    zipcode: req.body.zipcode,
                    phone: req.body.phone,
                }
             );
    
             new_customer.save()
             .then((result)=>{
                res.status(200).json({
                    message: 'success add new Customer',
                    result: result
                });
             })
             .catch((err)=>{
                res.status(500).json({
                    message: 'server error'
                });
             });
          });
    },

    showAllCustomer: function(req, res){
        Customer.find()
        .then((result)=>{
            res.status(200).json({
                message: 'success get all Customer',
                result: result
            });
         })
         .catch((err)=>{
            res.status(500).json({
                message: 'server error'
            });
         });
    },

    updateCustomerByMemberId: function(req,res){
        Customer.updateOne(
            {memberid : req.body.memberid},
            req.body
        )
        .then((result)=>{
            res.status(200).json({
                message: 'success update Customer',
                result: result
            });
         })
         .catch((err)=>{
            res.status(500).json({
                message: 'server error'
            });
         });
    },

    deleteCustomerByMemberId: function(req, res){
        Customer.deleteOne({memberid : req.body.memberid})
        .then((result)=>{
            res.status(200).json({
                message: 'success delete Customer',
                result: result
            });
         })
         .catch((err)=>{
            res.status(500).json({
                message: 'server error'
            });
         });
    }
    
};
 
