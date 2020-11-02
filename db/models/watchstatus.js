'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchStatus = sequelize.define('WatchStatus', {
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    willWatch: DataTypes.BOOLEAN,
    haveWatched: DataTypes.BOOLEAN
  }, {});
  WatchStatus.associate = function(models) {
    // associations can be defined here
    WatchStatus.belongsTo(models.User, { foreignKey: 'userId' });
    WatchStatus.belongsTo(models.Movie, { foreignKey: 'movieId' });
    // belongs to users
    // belongs to movies
  };
  return WatchStatus;
};
