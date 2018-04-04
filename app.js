const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose');

const books = require('./routes/books')
const customers = require('./routes/customers')
const transactions = require('./routes/transactions')

mongoose.connect('mongodb://localhost/library_mongoose');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
    console.log('connected')
});

app.use('/books', books)
app.use('/customers', customers)
app.use('/transactions', transactions)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server starts on ${port}`)
})
