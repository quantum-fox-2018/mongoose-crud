const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = new Schema({
    member: {type: Schema.Types.ObjectId, ref: 'customers'},
    days: {
      type: Number,
      required: [true, 'Days required']
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
      required: [true, 'Name required']
    },
    booklist: [{type: Schema.Types.ObjectId, ref: 'books'}]
  });
  

let transaction = mongoose.model('transactions', transactionSchema);

// animalSchema.methods.findSimilarTypes = function(cb) {
//   return this.model('Animal').find({ type: this.type }, cb);
// };

module.exports = transaction
