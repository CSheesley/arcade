'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    releaseYear: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN,
    StoreId: DataTypes.INTEGER
  }, {});
  Game.associate = function(models) {
    Game.belongsTo(models.Store)
  };
  return Game;
};
