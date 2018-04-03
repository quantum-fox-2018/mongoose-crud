const customers = require('../models/customers');
const mongoose = require('mongoose');

module.exports = {
  getAll: function(req, res) {
    customers
      .find()
      .exec()
      .then(cust => {
        res.status(200).json({
          message: 'success get data',
          data: cust
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'failed to get data'
        })
      })
  },
  addCust: function(req,res) {
    let newMemberid;
    customers.count({}, (err, count) => {
      if (count >= 99) {
        newMemberid = `CL${count}`
      } else if (count > 9 && count < 99) {
        newMemberid = `CL0${count}`
      } else if (count <= 9) {
        newMemberid = `CL00${count}`
      }

      let { name, address, zipcode, phone } = req.body
      let newCust = new customers({
        name,
        memberid: newMemberid,
        address,
        zipcode,
        phone
      })

      newCust.save((err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.status(201).json({
            message: 'successfully added a new customer !',
            data: result
          })
        }
      })

    })

  },
  updateCust: function(req, res) {
    let id = mongoose.Types.ObjectId(req.params.id)
    let { name, address, zipcode, phone } = req.body
    customers.findByIdAndUpdate(id, {
      name,
      address,
      zipcode,
      phone
    })
    .then(update => {
      res.status(200).json({
        message: 'success update data',
        data: req.body
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'failed to update data'
      })
    })
  },
  deleteCust: function(req, res) {
    let id = mongoose.Types.ObjectId(req.params.id)
    customers.findOneAndRemove({ _id: id })
    .then(deleted => {
      res.status(200).json({
        message: 'success delete data',
        data: req.body
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'failed to delete data'
      })
    })
  }

};
