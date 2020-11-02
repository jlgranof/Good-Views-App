'use strict';
module.exports = (sequelize, DataTypes) => {
  const DVDShelf = sequelize.define('DVDShelf', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    info: DataTypes.TEXT
  }, {});
  DVDShelf.associate = function(models) {
    // associations can be defined here
    DVDShelf.belongsTo(models.User, { foreignKey: 'userId' });
    DVDShelf.hasMany(models.MoviesOnShelf, { foreignKey: 'dvdShelfId'});
    // belongs to user
    // has many moviesOnShelves
  };
  return DVDShelf;
};
