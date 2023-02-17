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

app.get('/buy/:ticker');

// We want users to be able to make a purchase by sending the required information as part of the route.  For example, if they want to buy 20 shares of stock ABC, they would go to `/buy/ABC/20`.

// Routes can have multiple parameters, for example, `/hi/:name/:age`. Update the path of your `GET` route to include a `shares` parameter.
