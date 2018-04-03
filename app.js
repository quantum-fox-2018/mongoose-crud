const app = require('express')()
const bodyParser = require('body-parser')
const books = require('./routes/books')
const customers = require('./routes/customers')
const transactions = require('./routes/transactions')
const mongoose =require ('mongoose')
mongoose.connect('mongodb://localhost/library');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/books',books)
app.use('/customers',customers)
app.use('/transactions',transactions)

app.listen(3000, ()=>{
  console.log('App listening on port 3000');
})
