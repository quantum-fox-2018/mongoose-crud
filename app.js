const express = require('express')
const app = express()
const books = require('./routes/books')
const customers = require('./routes/customers')
const transactions = require('./routes/transactions')


const mongoose =  require('mongoose')
mongoose.connect('mongodb://localhost/library');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection to mongoose success')
});

app.use('/books', books)
app.use('/customers', customers)
app.use('/transactions', transactions)



app.listen(3000, ()=>{
    console.log("listening on port 3000");
})

