const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//==========
//Books
//==========

const booksRouter = require('./routers/books');
app.use('/books', booksRouter);

//==========
//Books
//==========

const customerRouter = require('./routers/customers');
app.use('/customers', customerRouter);

//==========
//Transaction
//==========

const transactionRouter = require('./routers/transactions');
app.use('/transactions', transactionRouter);

app.listen(3000, () =>{
    console.log("connected to port 3000");
})