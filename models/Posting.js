const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Posting extends Model {}

Posting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: "post",
  }
);

module.exports = Posting;