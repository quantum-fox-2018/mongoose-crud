const routes = require('express').Router();
const {showAllBooks, newBooks, updateBooks, deleteBooks} = require('../controller/booksController');

routes.get('/', showAllBooks)
      .post('/', newBooks)
      .put('/:id', updateBooks)
      .delete('/:id', deleteBooks)


module.exports = routes;
