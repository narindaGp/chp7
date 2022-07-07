'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Biodata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      gender: {
        allowNull: false,
        notEmpty: true,
        isIn: [['male', 'female', 'none']],
        type: Sequelize.STRING
      },
      place: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.STRING
      },
      dateOfBirth: {
        allowNull: false,
        notEmpty: true,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Biodata');
  }
};