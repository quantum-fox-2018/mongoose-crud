const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = new Schema({
    member: {type: Schema.Types.ObjectId, ref: 'customers'},
    days: {
      type: Number,
      required: [true, 'Days required'],
      validate: {
        validator: function(value) {
          return value < 8;
        },
        message: 'maximum peminjaman 7 '
      }
    },
    out_date: {
      type: Date,
      required: [true, 'Out date required']
    },
    due_date: {
      type: Date,
      required: [true, 'Due date required']
    },
    in_date: {
      type: Date,
      required: [true, 'In date required']
    }, 
    fine: {
      type: Number,
      required: [true, 'Name required'],
      validate: {
        validator: function(value) {
          return value > 10000;
        },
        message: 'minimum denda 10000'
      }
    },
    booklist: [{type: Schema.Types.ObjectId, ref: 'books'}]
  });
  

let transaction = mongoose.model('transactions', transactionSchema);


module.exports = transaction
