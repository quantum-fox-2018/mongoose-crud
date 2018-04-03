const Transaction = require('../models/transactions')

module.exports = {
  getFine: (req,res,next)=>{
    let id = {_id:req.params.id}
    Transaction.findOne(id, (err, data) =>{
      let due_date = new Date(data.due_date)
      let in_date = new Date(req.body.in_date)
      let diff = Math.ceil((in_date - due_date)/(1000*3600*24))
      console.log("diff==",diff)
      if(diff >= 1){
        req.body.fine = diff * 10000
        console.log(req.body.fine)
        next()
      }else{
        req.body.fine = 0
        next()
      }
    })
  }
}

