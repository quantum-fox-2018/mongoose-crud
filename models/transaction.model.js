const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    days: Number,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    }]

})

var Transaction = mongoose.model('transaction', schema)

module.exports = Transaction