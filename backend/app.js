const express = require('express');
const path = require('path');
require('dotenv').config();
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/user');
const textRoutes = require('./routes/text');
const cors = require("cors");



const app = express();

app.use(cors({credentials: true}))




app.use(cookieParser());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/text', textRoutes);

module.exports = app;
