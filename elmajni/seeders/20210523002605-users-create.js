'use strict';

const faker = require('faker');

const users = [...Array(20)].map((user) => (
   {
       email: faker.internet.email(),
       userName: faker.internet.userName(),
       password: faker.internet.password(12),
       role: faker.random.arrayElement(['admin','author','guest']),
       createdAt: faker.date.between('2018-11-01', '2019-12-21'),
       updatedAt: faker.date.between('2021-01-01', '2021-05-26'),
   }
))
module.exports = {
   up: async (queryInterface, Sequelize) => {
       await queryInterface.bulkInsert('users', users, {});
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

