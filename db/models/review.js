'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Movie, { foreignKey: 'movieId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    // belongs to movies
    // belongs to users
  };
  return Review;
};
