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

  res.send();
});

// The response we send will be a string to confirm the trade.

// The string response message will be a template literal string, which is enclosed in backticks `/``.

// If we want to refer to a variable within a template string, we would enclose the variable in the following symbols `${}`.

// As an example, if we want to send a response saying "You purchased <shares> shares." (where <shares> refers to the number shares being purchased, which is currently stored in the `shares` variable):

//`res.send(`You purchased ${shares} shares.`)`

// Inside of the `res.send()` method, insert a template literal string saying "Transaction complete, you purchased XX shares of YY", where XX refers to the number of shares(the `shares` variable) and YY refers to the ticker (the `ticker` variable).
