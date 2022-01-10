const Sequelize = require('sequelize');
require('dotenv').config();

//create connection to the database, sequelize credentials passed in via .env file
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;