const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi', (req, res) => {
  res.send('Hi there!');
});

const prices = {
  ABC: 48.83,
  DEF: 2.98,
  GHI: 3.99,
  JKL: 99,
  MNO: 45.38,
  OPQ: 0.48,
  RST: 9.32,
  UVW: 10.94,
  XYZ: 5.32,
};

app.get('/buy/:ticker/:shares', (req, res) => {
  // 070. Express allows us to access the :ticker route parameter in the callback with the 'params' object, like 'req.params.ticker'.  Create two variables name 'ticker' and 'shares', assign them the corresponding values from 'req'.
  const ticker = req.params.ticker;
  const shares = req.params.shares;
});
