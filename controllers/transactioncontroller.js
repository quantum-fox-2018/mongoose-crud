const Transaction = require('../models/bookcustomer');


module.exports = {
    inserttransaction:(req,res)=>{
      const {member,days,fine,booklist}=req.body
      let transaction= new Transaction()
      let dueDate = new Date()
      dueDate.setDate(dueDate.getDate() + Number(days))
      let indate = new Date()
      indate.setDate(indate.getDate()+(Number(days)+Number(fine/1000)))
        transaction.member=member
        transaction.days=days
        transaction.due_date=dueDate
        transaction.in_date=indate
        transaction.fine=fine
        transaction.booklist=booklist
      transaction.save().then(data=>{
        res.status(200).send(data)
      }).catch(error=>{
        res.status(500).send(error)
      })
    },
    readtransaction:(req,res)=>{
      Transaction.find().populate('booklist').populate('member').exec().then(data=>{
        res.status(200).send(data)
      })
    },
    deletetransaction:(req,res)=>{
      Transaction.deleteOne({_id: req.params.id})
      .then(data=>{
        res.status(200).send(data)
      }).catch(error=>{
        res.status(500).send(error)
      })
    },
    updatetransaction:(req,res)=>{
      Transaction.findOne(
        {_id: req.params.id})
      .then(data=>{
        let dueDate = new Date()
        dueDate.setDate(dueDate.getDate() + Number(req.body.days))
        let inDate = new Date()
        inDate.setDate(inDate.getDate()+(Number(req.body.days)+Number(req.body.fine/1000)))
        Transaction.updateOne(
          {_id: req.params.id},
          {$set:
            {
              days:req.body.days,
              due_date:dueDate,
              in_date:inDate,
              fine:req.body.fine
            }
          })
        .then(datas=>{
          res.status(200).send(datas)
        }).catch(error=>{
          res.status(500).send(error)
        })
      }).catch(error=>{
        res.status(500).send(error)
      })
    }
}
