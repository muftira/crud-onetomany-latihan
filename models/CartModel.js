const {Sequelize} = require('sequelize');
const db = require('../config/Database');
const {DataTypes} = Sequelize;

const Cart = db.define('cart', {
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

// Cart.associate = models => {
//     Cart.belongsTo(models.Product, {
//         foreignKey : {
//             name: product_id
//         }
//     })
// }

// Cart.sync({alter: true})
// .then(res => console.log('Table Cart is made'))

module.exports =  Cart