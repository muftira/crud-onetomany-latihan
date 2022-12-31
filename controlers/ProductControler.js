const Product = require('../models/ProductModel');
const Cart = require('../models/CartModel')
const CartProduct = require('../models/CartProductModel')

const getProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Product.findAll({
            include: {
                model : Cart
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

const addProduct = async (req, res) => {
    try {
        const name = req.body.name
        const id = req.params.idproduct
        const result = await Product.create({name})
        // console.log('result =>',result);
        // const cart = await Cart.create({name: name, product_id: id})
        // Product.addCart(cart)
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Product.update({name : req.body.name},{
            where : {
                id
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Product.destroy({where : {id}})
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}