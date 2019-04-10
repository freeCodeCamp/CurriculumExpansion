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

// 050.  Let create our /buy endpoint.
// We want users to be able to make a purchase by sending the required information as part of the route.  For example, if they want to buy 20 shares of stock ABC, they would go to /buy/ABC/20
// We specify route parameter in the path with ':', for example '/buy/:ticker'
// Express allows us to access the :ticker route parameter in the callback with the 'params' object, like 'req.params.ticker'
// Now create a .get() route that accepts a 'ticker' and 'shares' that the user want to buy.  You will also need to provide a callback to the .get() method as a second argument, for now, we'll simply provide '(req, res) => {}'
app.get('/buy/:ticker/:shares', (req, res) => {});
