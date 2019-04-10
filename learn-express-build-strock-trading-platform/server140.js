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

// 140.  Now let's go back to validation checking of the '/buy' and '/sell' routes.  Since we will be doing similar checks to make sure that the 'ticker' exists and the number of 'shares' are valid on both routes, we can extract the validation into a separate middleware function.  Let's insert a middleware function name 'checkTickerAndShares' in the '/buy' and '/sell' routes.  The middleware function should be inserted as the second('middle') argument after the route and before the callback function.

app.get('/buy/:ticker/:shares', checkTickerAndShares, (req, res) => {
  const ticker = req.params.ticker;
  const shares = req.params.shares;
  const total = shares * prices[ticker];

  res.send(
    `Transaction complete, you purchased ${shares} shares of ${ticker} at $${
      prices[ticker]
    }/share for a total of $${total}.`,
  );
});

app.get('/sell/:ticker/:shares', checkTickerAndShares, (req, res) => {
  const ticker = req.params.ticker;
  const shares = req.params.shares;
  const total = shares * prices[ticker];
  res.send(
    `Transaction complete, you sold ${shares} shares of ${ticker} at $${
      prices[ticker]
    }/share for a total of $${total}.`,
  );
});

app.get('/price/:ticker', (req, res) => {
  const ticker = req.params.ticker.toUpperCase();

  if (!(ticker in prices)) {
    res.send('Error: the ticker you entered is invalid.');
  } else {
    res.send(`The price of ${ticker} is $${prices[ticker]}.`);
  }
});
