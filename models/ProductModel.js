const {Sequelize} = require('sequelize');
const db = require('../config/Database');
const {DataTypes} = Sequelize;
const Cart = require('../models/CartModel')
const CartProduct = require('../models/CartProductModel')

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

Product.belongsToMany(Cart,{ through: CartProduct })
Cart.belongsToMany(Product,{ through: CartProduct })
Product.hasMany(CartProduct);
CartProduct.belongsTo(Product);
Cart.hasMany(CartProduct);
CartProduct.belongsTo(Cart);

// Product.associate = models => {
//     Product.hasMany(models.Cart,{
//         onDelete: 'cascade'
//     })
// }

db.sync({alter: true})
.then(res => console.log('Table Product is made'))

module.exports =  Product
