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
  const ticker = req.params.ticker;
  const shares = req.params.shares;

  const total = shares * prices[ticker];

  // 080. We are going to follow the happy path for now and assume that the information sent to the API are all valid, but we'll come back to validation later.  Now we send back a response confirming that the trade was made.  Send a response back to the client with a message confirming the trade, be sure to include the ticker, number of shares, price per share, and total amount.

  // Now you should be able to test this route and receive a response.

  res.send(
    `Transaction complete, you purchased ${shares} shares of ${ticker} at $${
      prices[ticker]
    }/share for a total of $${total}.`,
  );
});
