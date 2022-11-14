'use strict';

// npm install express --save

const express = require('express');
const app = express();

// routing
const home = require('./routes/home');

// set app
app.set('views', './views');

// npm install ejs --save
app.set('view engine', 'ejs');

app.use('/', home); // use -> middleware

module.exports = app;
