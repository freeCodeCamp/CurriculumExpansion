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

  res.send(
    `Transaction complete, you purchased ${shares} shares of ${ticker} at $${
      prices[ticker]
    }/share for a total of $${total}.`
  );
});

app.get('/sell/:ticker/:shares', (req, res) => {
  const ticker = req.params.ticker;
  const shares = req.params.shares;
  const total = shares * prices[ticker];
  res.send(
    `Transaction complete, you sold ${shares} shares of ${ticker} at $${
      prices[ticker]
    }/share for a total of $${total}.`
  );
});

app.get('/price/:ticker', (req, res) => {
  const ticker = req.params.ticker.toUpperCase();

  if (ticker in prices) {
  }
});

// If the ticker doesn't exist, we want to send back a response saying that the ticker is invalid.

// Thus we actually want to check if the `ticker` does NOT exist in the `prices` object, so we will need to update the `if` conditional test.  To negate a conditional test we insert the symbol `!` before the test.

// Inside the parentheses, update the conditional test to `if(!(ticker in prices))`.
