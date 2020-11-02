'use strict';
module.exports = (sequelize, DataTypes) => {
  const MoviesOnShelf = sequelize.define('MoviesOnShelf', {
    dvdShelfId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  MoviesOnShelf.associate = function(models) {
    // associations can be defined here
    MoviesOnShelf.belongsTo(models.DVDShelf, { foreignKey: 'dvdShelfId' });
    MoviesOnShelf.belongsTo(models.Movie, { foreignKey: 'movieId' });
    // belongs to dvdShelves
    // belongs to movies
  };
  return MoviesOnShelf;
};
