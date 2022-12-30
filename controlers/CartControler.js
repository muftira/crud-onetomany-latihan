const Cart = require('../models/CartModel');
const Product = require('../models/ProductModel');

const getCart = async (req, res) => {
    try {
        const result = await Cart.findAll({
            include: {
                model: Product
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

const addCart = async (req, res) => {
    try {
        const name = req.body.name
        const result = await Cart.create({name})
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

const updateCart = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Cart.update({name : req.body.name},{
            where : {
                id
            }
        })
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

const deleteCart = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Cart.destroy({where : {id}})
        res.status(200).json(result)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getCart,
    addCart,
    updateCart,
    deleteCart
}