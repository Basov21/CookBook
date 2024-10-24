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
  })

  .post(verifyAccessToken, async (req, res) => {
    // const { id } = req.params;
    // const { recipeId } = req.body;
    const favourite = await Favourite.create({  userId: res.locals.user.id, recipeId:req.body.resipeId});
    res.json(favourite);
  });

module.exports = favouriteRouter