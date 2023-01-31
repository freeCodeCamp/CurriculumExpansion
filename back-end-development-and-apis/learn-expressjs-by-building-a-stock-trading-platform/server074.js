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

  const total = shares * prices[ticker];

  res.send(`Transaction complete, you purchased ${shares} shares of ${ticker}`);
});

// Lets add on to the template string to include the price per share and the total amount.  Remember that we can access the price per share of the `prices` object with `prices[ticker]`.

// Also remember that within a template string, we need to wrap any JavaScript reference with `${}`.

// Modify the response so it says:
// `Transaction complete, you purchased ${shares} shares of ${ticker} at $${prices[ticker]}/share for a total of $${total}.`
