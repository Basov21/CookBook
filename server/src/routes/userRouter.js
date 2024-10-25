const express = require('express');
const { Favourite } = require('../../db/models');
const favouriteRouter = express.Router();
const verifyAccessToken = require('../middlewares/verifyAccessToken')

favouriteRouter
  .route('/')
  .get(verifyAccessToken, async (req, res) => {
    const userId = res.locals.user.id;
    const favourites = await Favourite.findAll({ where: { userId} });
    res.json(favourites);
    console.log(favourites);
    
    // const favourites = await Favourite.findAll({
    //   where: { userId }})
    
    //   res.json(favourites)
    //   include: {
    //     model: Recipe,
    //   },
    // })
    // const recipes = favourites.map(fav => fav.recipe);
    // res.json(recipes)
    // console.log(recipes);
    
  })

  .post(verifyAccessToken, async (req, res) => {
    // const { id } = req.params;
    // const { recipeId } = req.body;
    // const favourite = await Favourite.create({  userId: res.locals.user.id, recipeId:req.body.recipeId});
    // res.json(favourite);
    try {
      const { recipeId } = req.body;
      const userId = res.locals.user.id;

      const favourite = await Favourite.create({ userId, recipeId });
      res.json(favourite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add favourite' });
    }

  });

module.exports = favouriteRouter