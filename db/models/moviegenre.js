'use strict';
module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define('MovieGenre', {
    movieId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {});
  MovieGenre.associate = function(models) {
    // associations can be defined here
    MovieGenre.belongsTo(models.Movie, { foreignKey: 'movieId' });
    MovieGenre.belongsTo(models.Genre, { foreignKey: 'genreId' });
    // belongs to movies
    // belongs to genres
  };
  return MovieGenre;
};
