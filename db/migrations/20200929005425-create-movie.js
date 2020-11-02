'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imdbId: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      rating: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      released: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      releasedTimeLapsed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      runtime: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      director: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      writer: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      actors: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      plot: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      language: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      poster: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      metascore: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      imdbRating: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      production: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      userRating: {
        type: Sequelize.STRING(10),
        allowNull: true,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Movies');
  }
};
