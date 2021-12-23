// 2017154003 고현석 
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('./user');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config, config.operatorsAliases, config.host
);

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);

module.exports = db;
