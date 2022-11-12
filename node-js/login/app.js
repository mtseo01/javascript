// npm install express --save

const express = require('express');
const app = express();

// set app
app.set('views', './views');

// npm install ejs --save
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home/index');
});

app.get('/login', (req, res) => {
  res.render('home/login');
});

app.listen(3000, () => {
  console.log('running server');
});
