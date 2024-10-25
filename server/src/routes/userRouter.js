const express = require('express');
const { Favourite } = require('../../db/models');
const { Recipe } = require('../../db/models');
const { User } = require('../../db/models');
const favouriteRouter = express.Router();
const verifyAccessToken = require('../middlewares/verifyAccessToken');

favouriteRouter
  .route('/')
  .get(verifyAccessToken, async (req, res) => {
    try {
      const userId = res.locals.user.id;
      const recipe = await User.findByPk(userId, {
        include: {
          model: Recipe,
          as: 'favourites',
        }
      },)
      res.status(200).json(recipe.favourites)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'No recipes founf' });
    }
  })

  .post(verifyAccessToken, async (req, res) => {
    try {
      const { recipeId } = req.body;
      const userId = res.locals.user.id;

      const favourite = await Favourite.create({ userId, recipeId });
      res.status(200).json(favourite);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add favourite' });
    }
  })

  .delete(verifyAccessToken, async (req, res) => {
    try {
      const { recipeId } = req.body;
      const userId = res.locals.user.id;

      await Favourite.destroy({where: {
        userId,
        recipeId
      }})
      res.sendStatus(200)
    } catch (error) {
      console.error(error)
    }
  })



module.exports = favouriteRouter