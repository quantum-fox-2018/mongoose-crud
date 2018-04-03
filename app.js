const express = require('express')
const morgan = require('morgan')
const app = express()

const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/mongoose-crud'
mongoose.connect(url, (err) => {
  if(!err) console.log('connected to database')
  else throw new Error(err)
})

const port = 3000
const books = require('./routes/books')
const transactions = require('./routes/transactions')
const customers = require('./routes/customers')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))

app.get('/', function(req,res){
  res.send(`Mongoose CRUD`)
})
app.use('/books', books)
app.use('/transactions', transactions)
app.use('/customers', customers)

app.listen(port,function(req,res){
  console.log(`App listen on ${port}`)
})
