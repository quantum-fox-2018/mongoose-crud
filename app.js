const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library-second')

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connection to db Success');
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

let indexRouter = require('./routes/index');
let booksRouter = require('./routes/books');
let transactionsRouter = require('./routes/transactions');
let customersRouter = require('./routes/customers');

app.use('/', indexRouter)
app.use('/books', booksRouter)
app.use('/transactions', transactionsRouter)
app.use('/customers', customersRouter)

app.listen(3000, ()=>{
  console.log('Server started on port 3000');
})
