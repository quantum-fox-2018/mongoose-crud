const customerSchema = require('../models/customers.model')

class Customers {
  static read(req,res) {
    customerSchema.find()
    .then(customers=>{
      res.status(200).json({
        message:'list of customers:',
        customers
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static create(req,res) {
    let obj = {
      name:req.body.name,
      memberid:req.body.memberid,
      address:req.body.address,
      zipcode:req.body.zipcode,
      phone:req.body.phone
    }
    customerSchema.create(obj)
    .then(customer=>{
      res.status(200).json({
        message:'create customer success',
        customer
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'create customer failed',
        err
      })
    })
  }

  static update(req,res){
    let target = {
      _id:req.params.id
    }
    customerSchema.findOne(target)
    .then(customer=>{
      customer.name = req.body.name || customer.name
      customer.memberid = req.body.memberid || customer.memberid
      customer.address = req.body.address || customer.addresss
      customer.zipcode = req.body.zipcode || customer.zipcode
      customer.phone = req.body.phone || customer.phone
      customer.save()
      .then(editedCustomer=>{
        res.status(200).json({
          message:'customer updated successfully',
          editedCustomer
        })
      })
      .catch(err=>{
        res.status(500).json({
          message:'customer udpate failed',
          err
        })
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'cant find customer',
        err
      })
    })
  }

  static delete(req,res) {
    let target = {
      _id:req.params.id
    }
    customerSchema.findByIdAndRemove(target)
    .then(customer=>{
      res.status(200).json({
        message:'customer deleted successfully',
        customer
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'customer deletion failed',
        err
      })
    })
  }
}

module.exports = Customers