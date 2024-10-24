const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const recipeRouter = require('./routes/recipeRouter');
const authRouter = require('./routes/authRouter');
const tokensRouter = require('./routes/tokensRouter');
const favouriteRouter = require('./routes/userRouter');


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/tokens', tokensRouter);
app.use('/api', authRouter);
app.use('/api/recipes', recipeRouter);
app.use('/api/favourites', favouriteRouter)



module.exports = app;

