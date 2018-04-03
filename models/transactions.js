const mongoose = require('mongoose');

let transactionSchema = mongoose.Schema({
  member: [{ type: mongoose.Schema.Types.ObjectId, ref: 'customer' }],
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'book' }]
},{
  timestamps: true
})

let transaction = mongoose.model('transaction', transactionSchema)

module.exports = transaction;
