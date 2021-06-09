'use strict';

const faker = require('faker');


const users = [...Array(20)].map((user) => (
  {
      email: faker.internet.email(),
      userName: faker.internet.userName(),
      password: faker.internet.password(12),
      role: faker.random.arrayElement(['admin','author','guest']),
      createdAt: faker.date.between('2000-01-01', '2021-06-01'),
      updatedAt: faker.date.between('2021-01-01', '2021-06-1'),
  }
))


const tag = [...Array(10)].map((tag) => (
  {
      id: faker.internet.email(),
      name: faker.internet.name(),
      createdAt: faker.date.between('2000-01-01', '2021-06-01'),
      updatedAt: faker.date.between('2021-01-01', '2021-06-1'),
  }
))


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
