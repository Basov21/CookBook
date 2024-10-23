const express = require('express');
const { Favourite } = require('../../db/models');
const favouriteRouter = express.Router();

favouriteRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const favourites = await Favourite.findAll({ where: { userId: id } });
  res.json(favourites);
});

module.exports = favouriteRouter