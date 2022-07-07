'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = require('../data/users.json')
    users.data.map(user => {
      user.createdAt = new Date(),
      user.updatedAt = new Date()
    })

    const biodata = require('../data/userBio.json')
    biodata.data.map(bio => {
      bio.createdAt = new Date(),
      bio.updatedAt = new Date()
    })

    await queryInterface.bulkInsert('Users', users.data);
    await queryInterface.bulkInsert('Biodata', biodata.data);
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null);
    await queryInterface.bulkDelete('Biodata', null);
  }
};
