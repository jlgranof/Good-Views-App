'use strict';

const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.DVDShelf, { foreignKey: 'movieId' });
    User.hasMany(models.WatchStatus, { foreignKey: 'movieId' });
    User.hasMany(models.Review, { foreignKey: 'movieId' });
    // has many dvdShelves
    // has many watchStatuses
    // has many reviews
  };

  User.prototype.isValid = () => true;

  User.prototype.setPassword = function (password) {
    this.hashedPassword = bcrypt.hashSync(password);
    return this;
  };

  User.prototype.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }

  User.prototype.toSafeObject = function () {
    return {
      createdAt: this.createdAt,
      email: this.email,
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      updatedAt: this.updatedAt,
    };
  }

  return User;
};
