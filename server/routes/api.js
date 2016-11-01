var express = require('express');
var router = express.Router();
var controller = require('../controllers/index')

router.get('/customer', controller.getCustomer)
router.post('/customer/create', controller.createCustomer)
router.delete('/customer/delete/:id', controller.deleteCustomer)
router.get('/customer/update/:id', controller.getCustomerEdit)
router.put('/customer/update/:id', controller.updateCustomer)

router.get('/item', controller.getItem)
router.post('/item/create', controller.createItem)
router.delete('/item/delete/:id', controller.deleteItem)
router.get('/item/update/:id', controller.getItemEdit)
router.put('/item/update/:id', controller.updateItem)

router.get('/cart', controller.getCart)
router.post('/cart/create', controller.createCart)
router.delete('/cart/delete/:id', controller.deleteCart)
router.get('/cart/update/:id', controller.getCartEdit)
router.put('/cart/update/:id', controller.updateCart)

module.exports = router;