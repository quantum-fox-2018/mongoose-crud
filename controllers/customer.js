const Customer = require('../models/customer')

module.exports = {
  findAll(req, res) {
    Customer.find()
    .then(customers => {
      res.status(200).json({
        message: 'success read customers',
        data: customers
      })
    })
    .catch(err => {
      res.status(500).json( {message: 'error database'} )
    })
  },

  createData(req, res) {
    let { name, memberid, address, zipcode, phone } = req.body
    let newCustomer = new Customer({name, memberid, address, zipcode, phone})

    newCustomer.save((err, customer) => {
      if(err) {
        res.status(500).json( {message: 'error database'} )
      } else {
        res.status(201).json({
          message: 'success insert customer',
          data: customer
        })
      }
    })
  },

  updateData(req, res) {
    let idObj = req.params.id
    Customer.findById(idObj, (err, customer) => {
      if(err) {
        res.status(500).json( {message: 'error database'} )
      } else {
        customer.name = req.body.name
        customer.memberid = req.body.memberid
        customer.address = req.body.address
        customer.zipcode = req.body.zipcode
        customer.phone = req.body.phone

        customer.save((err, customer) => {
          if(err) {
            res.status(500).json( {message: 'error database'} )
          } else {
            res.status(201).json({
              message: 'success update customer',
              data: customer
            })
          }
        })
      }
    })
  },

  deleteData(req, res) {
    let idObj = req.params.id
    Customer.findById(idObj, (err, customer) => {
      customer.remove((err, info) => {
        if(err) {
          res.status(500).json( {message: 'error database'} )
        } else {
          res.status(201).json({
            message: 'success delete customer',
            data: info
          })
        }
      })
    })
  }
}