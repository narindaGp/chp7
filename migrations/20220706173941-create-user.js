'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      role: {
        allowNull: false,
        notEmpty: true,
        isIn: [['admin', 'user', 'vip']],
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        notEmpty: true,
        isEmail: true,
        unique: true,
        type: Sequelize.STRING
      },
      isSuperAdmin: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};