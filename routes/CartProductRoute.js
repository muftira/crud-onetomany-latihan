const express = require('express');
const {getCartProduct,addCartProduct,updateCartProduct,deleteCartProduct, addCartProductbyId} = require('../controlers/CartProductControler')
const router = express.Router();

router.get('/cartproduct', getCartProduct)
router.post('/cartproduct/:id', addCartProduct)
router.post('/cartproduct/:idcart/:idproduct', addCartProductbyId)
router.put('/cartproduct/:id', updateCartProduct)
router.delete('/cartproduct/:id', deleteCartProduct)

module.exports = router