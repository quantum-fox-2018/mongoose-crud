var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
    member: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    days: Number,
    out_date: Date,
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
},{
    timestamps: true
});

let Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;