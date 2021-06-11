'use strict';

const faker = require('faker');


const users = [...Array(20)].map((user) => (
  {
      email: faker.internet.email(),
      userName: faker.internet.userName(),
      password: faker.internet.password(12),
      role: faker.random.arrayElement(['admin','author','guest']),
      createdAt: faker.date.between('2000-01-01', '2021-01-01'),
      updatedAt: faker.date.between('2021-01-01', '2021-06-1')
  }
))

 
const tags = [...Array(10)].map((tag) => (
  {
     
      name: faker.name.findName()+ faker.name.findName() + faker.name.findName(),
      createdAt: faker.date.between('2000-01-01', '2021-06-01'),
      updatedAt: faker.date.between('2021-01-01', '2021-06-1')
  }
))

const articles = [...Array(10)].map((article) => (
  {
      title: faker.name.title(),
      content: faker.lorem.sentences(),
      published:faker.random.boolean(),
      createdAt: faker.date.between('2021-01-01', '2021-06-01'),
      updatedAt: faker.date.between('2021-01-01', '2021-06-1'),
      UserId:faker.random.arrayElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
  }
))

const articleTag = [...Array(10)].map((articleTag) => (
  {
      createdAt: faker.date.between('2000-01-01', '2021-06-01'),
      updatedAt: faker.date.between('2021-01-01', '2021-06-1'),
      ArticleId: faker.random.arrayElement([1,2,3,4,5,6,7,8,9,10]),
      TagId: faker.random.arrayElement([1,2,3,4,5,6,7,8,9,10])
  }
))

const comments = [...Array(10)].map((comments) => (
  {
      content: faker.lorem.sentences(),
      createdAt: faker.date.between('2000-01-01', '2021-06-01'),
      updatedAt: faker.date.between('2021-01-01', '2021-06-1'),
      ArticleId: faker.random.arrayElement([1,2,3,4,5,6,7,8,9,10]),
      
  }
))


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', users, {});
    await queryInterface.bulkInsert('tags', tags, {});
    await queryInterface.bulkInsert('articles', articles, {});
    await queryInterface.bulkInsert('articleTags', articleTag, {});
    await queryInterface.bulkInsert('comments', comments, {});

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
