const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000

mongoose.connect('mongodb://localhost/librarydb', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('success connect db')
  }
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded( {extended: false} ))

app.use('/', require('./routes'))

app.listen(PORT, () => {
  console.log(`running for day2, task2 in ${PORT}`)
})