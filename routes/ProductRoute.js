const express = require('express');
const {getProduct,addProduct, updateProduct, deleteProduct} = require('../controlers/ProductControler')
const router = express.Router();

router.get('/product', getProduct)
router.post('/product', addProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id', deleteProduct)

module.exports = router