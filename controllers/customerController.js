const Customer = require('../models/customer')

module.exports = {
  getAll : function(req,res){
    Customer.find().exec().then(response=>{
      res.status(200).json({
        message : 'success get data',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'get data failed',
        err
      })
    })
  },

  getOne : function(req,res){
    Customer.findById(req.params.id).exec().then(response=>{
      res.status(200).json({
        message : 'success get data by id',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'get data by id failed',
        err
      })
    })
  },

  addCustomer : function(req,res){

    let newCustomer = new Customer({
      name : req.body.name,
      memberid : req.body.memberid,
      address : req.body.address,
      zipcode : req.body.zipcode,
      phone : req.body.phone,
    })

    newCustomer.save().then(response=>{
      res.status(200).json({
        message : 'success insert data',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'insert error',
        err
      })
    })
  },


  removeCustomer : function(req,res){

    Customer.findByIdAndRemove(req.params.id).then(response=>{
      res.status(200).json({
        message : 'delete success',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'delete error',
        err
      })
    })
  },

  updateCustomer : function(req,res){

    Customer.update({_id:req.params.id}, {
      name : req.body.name,
      memberid : req.body.memberid,
      address : req.body.address,
      zipcode : req.body.zipcode,
      phone : req.body.phone,
    }).then(response=>{
      res.status(200).json({
        message : 'update success',
        data : response
      })
    }).catch(err=>{
      res.status(500).json({
        message : 'update error',
        err
      })
    })

  }


}
