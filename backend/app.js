const express = require('express');
const path = require('path');
require('dotenv').config();
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/user');
const textRoutes = require('./routes/text');




const app = express();

app.use(express.json());







app.use(cookieParser());


app.use(express.urlencoded({extended: true}));




app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


app.use('/api/user', userRoutes);
app.use('/api/text', textRoutes);



module.exports = app;
