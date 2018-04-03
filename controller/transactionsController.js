const ObjectID = require('mongodb').ObjectID;
const transactions = require('../models/transactions');

module.exports = {
  showAllTransactions: function(req, res) {
    transactions.find()
                .populate('booklist')
                .exec()
                .then(transactions => {
                  res.status(200).json({
                    message: "Show all Transactions",
                    transactions
                  })
                })
                .catch(err => {
                  res.status(500).json({
                    message: err
                  })
                })
  },
  newTransactions: function(req, res) {
    let newTransactions = new transactions({
      member: req.body.member,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine:req.body.fine,
      booklist: req.body.booklist
    })

    // console.log(newTransactions);
    newTransactions.save((err, transactions) => {
      if(err){
        res.status(500).json({
          message: err
        })
      }else {
        res.status(201).json({
          message: `Transaction of ${newTransactions.member} is Succesfully`,
          transactions
        })
      }
    })
  },
  addBooksTransactions: function(req, res) {
    let transactionsId = req.params.id;
    let booksId = req.body.booksId;

    transactions.findOne({_id:ObjectID(transactionsId)})
                //.populate('booklist')
                .then(transactionsData => {
                  //console.log('from promise', transactions.booklist);

                  //add new book
                  transactionsData.booklist.push(booksId)
                  //console.log('new transactions', transactions);
                  transactions.update({_id:ObjectID(transactionsId)}, transactionsData)
                              .then(results => {
                                res.status(200).json({
                                  message: `Books id ${booksId} Succesfully added to transaction`,
                                  results
                                })
                              })
                              .catch(err => {
                                res.status(500).json({
                                  message: err
                                })
                              })
                })
                .catch(err => {
                  res.status(500).json({
                    message: err
                  })
                })
  },
  deleteTransactions: function(req, res) {
    let transactionsId = req.params.id;

    transactions.remove({_id:ObjectID(transactionsId)})
                .then(results => {
                  res.status(200).json({
                    message: `Transaction with id ${transactionsId} Succesfully deleted`,
                    results
                  })
                })
                .catch(err => {
                  res.status(500).json({
                    message: err
                  })
                })
  }
}
