const Customers = require('../models/Customer');


module.exports = {
    readcustomer:(req,res)=>{
      Customers.find().then(datas=>{
        res.status(200).send(datas)
      })
    },
    insertcustomer:(req,res)=>{
      const {name,memberid,address,zipcode,phone}=req.body
      let customers= new Customers()
        customers.name=name
        customers.memberid=memberid
        customers.address=address
        customers.zipcode=zipcode
        customers.phone=phone
      customers.save().then(data=>{
        res.status(200).send(data)
      }).catch(error=>{
        res.status(500).send(error)
      })
    },
    updatecustomer:(req,res)=>{
      Customers.updateOne(
        {_id: req.params.id},
        {$set:
          {
            name:req.body.name,
            memberid:req.body.memberid,
            address:req.body.address,
            zipcode:req.body.zipcode,
            phone:req.body.phone
          }
        })
      .then(data=>{
        res.status(200).send(data)
      }).catch(error=>{
        res.status(500).send(error)
      })
    },
    deletecustomer:(req,res)=>{
      Customers.deleteOne({_id: req.params.id})
      .then(data=>{
        res.status(200).send(data)
      }).catch(error=>{
        res.status(500).send(error)
      })
    }
}
