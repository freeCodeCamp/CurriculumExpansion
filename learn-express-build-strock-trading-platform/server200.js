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

const checkTickerAndShares = (req, res, next) => {
  req.params.ticker = req.params.ticker.toUpperCase();

  if (!(req.params.ticker in prices)) {
    res.send('Error: the ticker you entered is invalid.');
  } else if (!parseInt(req.params.shares)) {
    res.send('Error: the number of shares submitted is invalid.');
  } else {
    req.params.shares = parseInt(req.params.shares);
    // 200.  Now we indicate that we are done with our middleware function and are ready to move on to the next function (the callback from the main app.get() function).  To do this, we call the 'next()' function.

    // Now the callback function will have the modifications to the 'req' object that we make in this middleware function

    // You can now test your middleware function by sending a invalid ticker or number of shares, this middleware should intervene and send back the appropriate error messages

    next();
  }
};

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
