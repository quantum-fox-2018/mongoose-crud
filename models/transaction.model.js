const mongoose = require('mongoose')
const Schema = mongoose.Schema

let transactionSchema = mongoose.Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: "customers"
    },
    days: {
        type: Number,
        required: [true, 'days required']
    },
    out_date: {
        type: Date,
        required: [true, 'out_date required']
    },
    due_date: Date,
    in_date: Date,
    fine: Number,
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: "books"
    }]
}, {
    timestamps: true
})

let transaction = mongoose.model('transactions', transactionSchema)

module.exports = transaction