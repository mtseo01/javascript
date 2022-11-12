'use strict';

// npm install express --save

const express = require('express');
const app = express();

const PORT = 3000;

// set app
app.set('views', './views');

// npm install ejs --save
app.set('view engine', 'ejs');

const home = require('./routes/home');
app.use('/', home); // use -> middleware

app.listen(PORT, () => {
  console.log('running server');
});
