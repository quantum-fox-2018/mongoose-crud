const Customer = require('../models/customers')

module.exports = {
  getAllCustomer: (req, res) =>{
    Customer.find()
    .exec()
    .then(dataCustomer =>{
      res.status(200).json({
        message: "success get all customer",
        dataCustomer
      })
    }).catch(error =>{
      res.status(400).json({
        message: "failed get customer list"
      })
    })
  },
  addCustomer: (req, res) =>{
    let input ={
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }
    Customer.create(input, (error, newCustomer)=>{
      if(!error){
        res.status(201).json({
          message: "add new customer success",
          newCustomer
        })
      }else{
        res.status(400).json({
          message: "failed add new customer"
        })
      }
    })
  },
  removeCustomer: (req, res) =>{
    let id ={_id:req.params.id}
    Customer.findByIdAndRemove(id, (error, removedCustomer)=>{
      console.log(removedCustomer)
      if(error){
        res.status(400).json({
          message: "failed remove a customer",
          error
        })
      }else if (removedCustomer === null){
        res.status(404).json({
          message: "customer not found"
        })
      }
      else{
        res.status(200).json({
          message: "remove customer success",
          removedCustomer
        })
      }
    })
  },
  editCustomer: (req, res) =>{
    let id ={_id:req.params.id}
    Customer.findOneAndUpdate(id,req.body, (error, beforeUpdate)=> {
      if(!error){
        res.status(200).json({
          message: "edit customer success"
        })
      }else{
        res.status(400).json({
          message: "failed edit data of customer"
        })
      }
    })
  }
}