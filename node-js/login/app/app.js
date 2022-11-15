'use strict';

// modules
// npm install express --save
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// routing
const home = require('./src/routes/home');

// set app
app.set('views', './src/views');

// npm install ejs --save
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', home); // use -> middleware

module.exports = app;
