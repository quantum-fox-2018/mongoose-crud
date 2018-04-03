const router = require('express').Router();
const customer = require('../controllers/customer_controllers');

//Get all books
router.get('/show', customer.showAllCustomer);

//Create a new book
router.post('/add', customer.createNewCustomer);

//Update a book
router.put('/update/:id', customer.updateCustomer);

//Delete a book
router.delete('/delete/:id', customer.deleteCustomer);

//Show one book
router.get('/show/:id', customer.showOneCustomer);

module.exports = router;