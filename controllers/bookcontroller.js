const Books = require('../models/Book');


module.exports = {
    readbook:(req,res)=>{
      Books.find().then(datas=>{
        res.status(200).send(datas)
      })
    },
    insertbook:(req,res)=>{
      const {isbn,title,author,category,stock}=req.body
      let books= new Books()
        books.isbn=isbn
        books.title=title
        books.author=author
        books.category=category
        books.stock=stock
      books.save().then(data=>{
        res.status(200).send(data)
      }).catch(error=>{
        res.status(500).send(error)
      })
    },
    updatebook:(req,res)=>{
      Books.updateOne(
        {_id: req.params.id},
        {$set:
          {
            isbn:req.body.isbn,
            title:req.body.title,
            author:req.body.author,
            category:req.body.category,
            stock:req.body.stock
          }
        })
      .then(data=>{
        res.status(200).send(data)
      }).catch(error=>{
        res.status(500).send(error)
      })
    },
    deletebook:(req,res)=>{
      Books.deleteOne({_id: req.params.id})
      .then(data=>{
        res.status(200).send(data)
      }).catch(error=>{
        res.status(500).send(error)
      })
    }
}
