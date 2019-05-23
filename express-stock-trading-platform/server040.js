const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi', (req, res) => {
  res.send('Hi there trader!');
});

// 040.  Now we need create a repository of stock tickers and their prices.  Normally, you might make an API call to another service that provides the most up-to-date pricing information. But for our exercise, we will store the price information locally.
//Create a Javascript object name 'prices' consisting of the following key-value pairs of tickers and their prices:
// {
//   ABC: 48.83,
//   DEF: 2.98,
//   GHI: 3.99,
//   JKL: 99,
//   MNO: 45.38,
//   OPQ: 0.48,
//   RST: 9.32,
//   UVW: 10.94,
//   XYZ: 5.32,
// };

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
