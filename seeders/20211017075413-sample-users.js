'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName:"Kobe",
          lastName:"Bryant",
          email:"kobe@black.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName:"Tommy",
          lastName:"Shelby",
          email:"tommy@blinder.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName:"Tim",
          lastName:"Brown",
          email:"tim@raiders.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
