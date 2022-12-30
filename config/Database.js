const {Sequelize} = require('sequelize')

const db = new Sequelize('latihan', 'postgres', 'masukaja',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports =  db;