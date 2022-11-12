// npm install express --save

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('this is root.');
});

app.get('/login', (req, res) => {
  res.send('this is login page.');
});

app.listen(3000, () => {
  console.log('running server');
});
