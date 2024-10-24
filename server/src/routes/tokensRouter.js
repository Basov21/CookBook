const tokensRouter = require('express').Router();
const cookieConfig = require('../configs/cookieConfig');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');
const generateTokens = require('../utils/generateTokens');




tokensRouter.get('/refresh', verifyRefreshToken, (req, res) => {
  const { accessToken, refreshToken } = generateTokens({ user: res.locals.user, });
  res
    .status(200)
    .cookie('refreshToken', refreshToken, cookieConfig)
    .json({ user: res.locals.user, accessToken });
});

module.exports = tokensRouter;
