const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi', (req, res) => {
  res.send('Hi there trader!');
});

//Create a JavaScript object named 'prices' consisting of the following key-value pairs of tickers and their prices:
//```
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
//```
