'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsToMany(User, { through: 'Favourites', foreignKey: 'recipeId', as: 'liked' });
      this.belongsTo(User, { foreignKey: 'userId', as: 'usersRecipe' });
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      ingredients: DataTypes.TEXT,
      time: DataTypes.INTEGER,
      instruction: DataTypes.TEXT,
      img: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Recipe',
    },
  );
  return Recipe;
};
