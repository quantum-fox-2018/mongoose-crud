const mongoose = require('mongoose');
const Schema = mongoose.Schema

let transactionSchema = new mongoose.Schema({
  member : {
      type : Schema.Types.ObjectId, ref : 'customer'
    },
    days: Number,
    out_date: Date,
    due_date : Date,
    in_date : {
      type :Date,
      default : Date.now
    },
    fine : Number,
    booklist : [{ type : Schema.Types.ObjectId, ref : 'book'}]

},{
  timestamp :true
});

let transaction = mongoose.model('transaction',transactionSchema)

module.exports = transaction
