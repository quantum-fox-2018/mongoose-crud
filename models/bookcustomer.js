var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var transactionsschema = new Schema({
  member:{
    type:Schema.Types.ObjectId,
    ref:'customer'
  },
  days:Number,
  out_date:{
    type: Date,
    default: Date.now
  },
  due_date:{
    type: Date,
    default: ''
  },
  in_date:{
    type: Date,
    default: ''
  },
  fine:Number,
  booklist:[{
    type:Schema.Types.ObjectId,
    ref:'books'
  }],
  createdAt:
  {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model('transaction',transactionsschema)
module.exports= Transaction
