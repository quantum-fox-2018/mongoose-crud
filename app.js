const app = require('express')()
const bodyParser = require('body-parser')
const books = require('./routes/books')
const mongoose =require ('mongoose')
mongoose.connect('mongodb://localhost/library');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/',books)


app.listen(3000, ()=>{
  console.log('App listening on port 3000');
})
