'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      { genre: 'Action', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Adventure', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Animation', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Biography', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Comedy', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Crime', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Documentary', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Family', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Fantasy', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Film Noir', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'History', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Horror', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Music', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Musical', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Mystery', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Romance', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Sci-Fi', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Sport', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Superhero', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Thriller', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'War', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Western', createdAt: new Date(), updatedAt: new Date() },
      { genre: 'Drama', createdAt: new Date(), updatedAt: new Date() },
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
