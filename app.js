const express = require('express')
const mongoose = require('mongoose')

const indexRoutes = require('./routes/index')

mongoose.connect('mongodb://localhost:27017/library', (err) => {
    if(err) throw err
    console.log('Connected DB Success')
})

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRoutes)

app.listen(port, log => {
    console.log(`Apps is running on port "${port}"`)
})