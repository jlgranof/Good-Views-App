'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    imdbId: DataTypes.STRING,
    name: DataTypes.TEXT,
    rating: DataTypes.STRING,
    released: DataTypes.STRING,
    releasedTimeLapsed: DataTypes.INTEGER,
    runtime: DataTypes.STRING,
    director: DataTypes.TEXT,
    writer: DataTypes.TEXT,
    actors: DataTypes.TEXT,
    plot: DataTypes.TEXT,
    language: DataTypes.STRING,
    country: DataTypes.STRING,
    poster: DataTypes.TEXT,
    metascore: DataTypes.STRING,
    imdbRating: DataTypes.STRING,
    production: DataTypes.STRING,
    userRating: DataTypes.STRING
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.hasMany(models.MovieGenre, { foreignKey: 'movieId' });
    Movie.hasMany(models.MoviesOnShelf, { foreignKey: 'movieId' });
    Movie.hasMany(models.WatchStatus, { foreignKey: 'movieId' });
    Movie.hasMany(models.Review, { foreignKey: 'movieId' });
    // has many movieGenres
    // has many moviesOnShelves
    // has many watchStatuses
    // has many reviews
  };
  return Movie;
};
