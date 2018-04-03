const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const transactionSchema = new Schema({
  member:{
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: Number,
  out_date: {
    type:Date,
    default: Date.now
  },
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
},{
  timestamps: true
})
transactionSchema.pre('save',function(){
  return this.due_date = moment().add(this.days, 'days').format()
})

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction

// moment().add(1, 'days').calendar(); 