const {Sequelize} = require('sequelize')

const db = new Sequelize('latihan', 'postgres', 'tinggalmasuk',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports =  db;