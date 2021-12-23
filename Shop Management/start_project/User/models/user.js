// 2017154003 고현석 
const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
        primaryKey: true
      },
      passwd: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      username: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      mobile: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored: false,
      modelName: 'User',
      tableName: 'customer',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
