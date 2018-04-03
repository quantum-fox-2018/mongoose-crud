const ObjectID = require('mongodb').ObjectID;
const customers = require('../models/customers');

module.exports = {
  showAllCustomers: function(req, res) {
    customers.find()
             .exec()
             .then(customers => {
               res.status(200).json({
                 message: "Show all Customers",
                 customers
               })
             })
             .catch(err => {
               res.status(500).json({
                 err
               })
             })
  },
  newCustomers: function(req, res) {
    let newCustomers = new customers({
      name: req.body.name,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })

    newCustomers.save((err, customers) => {
      if(err){
        res.status(500).json({
          message: err
        })
      }else{
        res.status(201).json({
          message: `${newCustomers.name} Succesfully added`,
          customers
        })
      }
    })
  },
  updateCustomers: function(req, res) {
    let customerId = req.params.id;
    let customerUpdate = {
      name: req.body.name,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }

    customers.findOneAndUpdate({_id:ObjectID(customerId)}, customerUpdate)
             .then(customers => {
               res.status(200).json({
                 message: `Customers with id ${customerId} Succesfully updated`,
                 customers
               })
             })
             .catch(err => {
               res.status(500).json({
                 message: err
               })
             })
  },
  deleteCustomers: function(req, res) {
    let customerId = req.params.id;

    customers.remove({_id:ObjectID(customerId)})
             .then(results => {
                res.status(200).json({
                  message: `Customers with id ${customerId} Succesfully deleted`,
                  results
                })
             })
             .catch(err => {
              res.status(500).json({
                message: err
              })
            })

  }

}











//
