const CartProduct = require('../models/CartProductModel')
const Cart = require('../models/CartModel')
const Product = require('../models/ProductModel')

const getCartProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result = await CartProduct.findAll({
            include : [
                {model: Product},
                {model: Cart}
            ]
        })
        console.log('result',result);
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

const addCartProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result1 = await Cart.create()
        const result2 = await CartProduct.create({cartId:result1.id, productId:id})
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}
const addCartProductbyId = async (req, res) => {
    try {
        const idcart = req.params.idcart
        const idproduct = req.params.idproduct
        const result = await CartProduct.create({cartId:idcart, productId:idproduct})
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

const updateCartProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result = await CartProduct.update({name : req.body.name},{
            where : {
                id
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

const deleteCartProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result = await CartProduct.destroy({where : {id}})
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getCartProduct,
    addCartProduct,
    updateCartProduct,
    deleteCartProduct,
    addCartProductbyId
}