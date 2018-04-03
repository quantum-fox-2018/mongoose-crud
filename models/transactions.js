const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let transactionsSchema = mongoose.Schema({
  member: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'books'}]
}, {
  timestamps: true
})

let transactions = mongoose.model('transactions', transactionsSchema)

module.exports = transactions;
