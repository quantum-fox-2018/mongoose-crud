const mongoose = require('mongoose')

let bookSchema = mongoose.Schema({
    isbn: {
        type: String,
        required: [true, 'ISBN book required']
    },
    title: {
        type: String,
        required: [true, 'Title book required']
    },
    author: {
        type: String,
        required: [true, 'Author book required']
    },
    category: {
        type: String,
        required: [true, 'Category book required']
    },
    stock: {
        type: Number,
        required: [true, 'Stock book required']
    }
}, {
    timestamps: true
})

let book = mongoose.model('books', bookSchema)

module.exports = book