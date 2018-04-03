const mongoose = require('mongoose');
// const ObjectId = require('mongodb').ObjectID;

mongoose.connect('mongodb://localhost/library');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    member: {
        type: Schema.Types.ObjectId,
        ref: 'Customer' 
    },
    days: Number,
    out_date: {type: Date, default: Date.now},
    due_date: "",
    in_date: "",
    fine: 0,
    booklist: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
})


transactionSchema.pre('save', function() {
    console.log('before',this)
    this.due_date = (this.out_date.getDate() + this.days).getFullDay() 

    // if (this.in_date > this.due_date) {
    //     let late_days = this.in_date - this.due_date;
    //     let fine = late_days * 1000;
    //     this.fine = fine; 
    // }

    console.log('after',this)
})

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;