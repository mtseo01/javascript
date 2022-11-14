'use strict';

// npm install express --save

const express = require('express');
const app = express();

// routing
const home = require('./src/routes/home');

// set app
app.set('views', './src/views');

// npm install ejs --save
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));

app.use('/', home); // use -> middleware

module.exports = app;
