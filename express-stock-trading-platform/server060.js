const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi', (req, res) => {
  res.send('Hi there trader!');
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
  XYZ: 5.32
};

app.get('/buy/:ticker/:shares', (req, res) => {
  const ticker = req.params.ticker;
  const shares = req.params.shares;
});

//Now we need calculate the total amount of the purchase.

//You can determine the price per share from the `prices` object we previously declared above.
//For example, if we wanted the price for stock MNO, we would use `prices['MNO']`.
//To get the price for the stock we need, we would use `prices[ticker]`.

//Create a variable named 'total' and set it equal to `shares * prices[ticker]`.
