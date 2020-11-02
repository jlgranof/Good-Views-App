'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    genre: DataTypes.STRING
  }, {});
  Genre.associate = function(models) {
    // associations can be defined here
    Genre.hasMany(models.MovieGenre, { forgeinKey: 'genreId' });
    // has many movieGenres
  };
  return Genre;
};
