const {getAll,addCustomer,removeCustomer,updateCustomer,getOne}  = require('../controllers/customerController')

const express = require('express');
const router = express.Router()

router.get('/',getAll)
router.post('/add',addCustomer)
router.delete('/delete/:id',removeCustomer)
router.put('/update/:id',updateCustomer)
router.get('/:id',getOne)


module.exports = router
