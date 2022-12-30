const express = require('express');
const {getCart, addCart, updateCart, deleteCart} = require('../controlers/CartControler')
const router = express.Router();

router.get('/cart', getCart)
router.post('/cart', addCart)
router.put('/cart/:id', updateCart)
router.delete('/cart/:id', deleteCart)

module.exports = router