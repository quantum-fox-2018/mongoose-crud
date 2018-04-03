const express = require('express')
const routerBook = require('./routes/book')
const routerTransaction = require('./routes/transaction')
const routerCustomer = require('./routes/customer')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/library')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routerBook)
app.use('/', routerTransaction)
app.use('/', routerCustomer)

app.listen(3000, (err) => {
    if(err) { res.send(err) }
    console.log('Aplikasi berjalan di 3000')
})