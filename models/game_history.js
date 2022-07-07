'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game_History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game_History.belongsToMany(models.User);
    }
  }
  Game_History.init({
    UserId: DataTypes.INTEGER,
    partner: DataTypes.STRING,
    point: DataTypes.INTEGER,
    outcome: DataTypes.STRING,
    playedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Game_History',
  });
  return Game_History;
};