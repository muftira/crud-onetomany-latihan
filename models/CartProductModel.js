const {Sequelize} = require('sequelize');
const db = require('../config/Database');
const {DataTypes} = Sequelize;

const CartProduct = db.define('cart_product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    }
},{
    freezeTableName: true,
    timestamps: false
})

module.exports = CartProduct