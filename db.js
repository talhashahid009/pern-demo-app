const { Sequelize, DataTypes } = require('sequelize')

var sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
})


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('../models/user')(sequelize, Sequelize)


module.exports = db