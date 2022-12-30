const {Sequelize} = require('sequelize');
const db = require('../config/Database');
const {DataTypes} = Sequelize;
const Cart = require('../models/CartModel')

const Product = db.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    name: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false
})

Product.hasMany(Cart,{
    foreignKey: "product_id"
})

Cart.belongsTo(Product, {
    foreignKey: "product_id"
})

// Product.associate = models => {
//     Product.hasMany(models.Cart,{
//         onDelete: 'cascade'
//     })
// }

db.sync({alter: true})
.then(res => console.log('Table Product is made'))

module.exports =  Product
