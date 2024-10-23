const { Router } = require('express');
const { Recipe } = require('../../db/models');

const recipeRouter = Router();

recipeRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const recipes = await Recipe.findAll(); // ?
      res.json(recipes);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ text: 'Ошибка получения карточек', message: error.message });
    }
  })

module.exports = recipeRouter;
