"use strict";
const { Model } = require("sequelize");
const UserInfo = require("./userinfo");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasOne(models.UserInfo);
      User.hasMany(models.Product, { foreignKey: { allowNull: false,type:DataTypes.INTEGER } });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
