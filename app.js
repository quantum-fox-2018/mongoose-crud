const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const mongoose = require('mongoose')

const routeBooks = require('./routes/books')
const routeCustomers = require('./routes/customers')
const routeTransactions = require('./routes/transactions')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
mongoose.connect('mongodb://localhost/library')

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Connected to db success...')
})

app.get('/', (req, res) => {
  res.status(200).send('Welcome home')
})

app.use('/books', routeBooks)
app.use('/customers', routeCustomers)
app.use('/transactions', routeTransactions)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})