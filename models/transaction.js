const mongoose = require('mongoose')

const Schema = mongoose.Schema

let transactionSchema = new Schema ({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: String,
  out_date: {
    type: Date,
    default: Date.now()
  },
  due_date: {
    type: Date,
    default: Date.now()
  },
  in_date: {
    type: Date,
    default: Date.now()
  },
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

transactionSchema.pre('save', function(next) {
  let days = this.days * 864e5
  let afterDays = +this.out_date + days
  this.due_date = new Date(afterDays)
  next()
})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction