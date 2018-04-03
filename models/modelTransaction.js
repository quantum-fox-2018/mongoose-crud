const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = new Schema({

},{
  timestamps: true
})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction