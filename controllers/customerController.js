const Customer = require('../models/customers')
const ObjectId = require('mongodb').ObjectID

module.exports = {
  create: (req,res) => {
    const newCustomer = new Customer(req.body)
    newCustomer.save(err => {
      if (err){
        return res.status(500).json({
        err: err.message
        })
      } else {
        return res.status(200).json({
          message:"inserted new customer",
          customer: req.body
        })
      }
    })
  },
  findAll: (req,res) =>{
    Customer.find((err, customers) => {
      if(err){
        return res.status(500).json({
          err: err.message
        })
      } else {
        return res.status(200).json({
          message:"this is all data",
          customers
        })
      }
    })
  },
  update: (req,res)=>{
    Customer.update({
      _id: ObjectId(req.params.id)
    },{
      $set: req.body
    },(err, customers)=>{
      if(err){
        res.status(500).json({
          message: `this is error`
        })
      } else {
        res.status(200).json({
          message: `data updated`,
          data: customers
        })
      }
    })
  },
  delete: (req,res)=>{
    Customer.findByIdAndRemove({
      _id: ObjectId(req.params.id)
    },(err, customers)=>{
      if(err){
        res.status(500).json({
          message: `this is error`
        })
      } else {
        res.status(200).json({
          message: `data deleted`,
          data: customers
        })
      }
    })
  }
}
