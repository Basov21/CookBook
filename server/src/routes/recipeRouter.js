const { Router } = require('express');
const { Recipe } = require('../../db/models');
const {
  RelationshipType,
} = require('sequelize/lib/errors/database/foreign-key-constraint-error');
const recipeRouter = Router();

recipeRouter.route('/').get(async (req, res) => {
  try {
    const recipes = await Recipe.findAll(); // ?
    res.json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ text: 'Ошибка получения карточек', message: error.message });
  }
});

recipeRouter.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const recipes = await Recipe.findOne({ where: { id } });
    res.json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ text: 'Ошибка получения карточки', message: error.message });
  }
});

module.exports = recipeRouter;
