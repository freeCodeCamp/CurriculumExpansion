const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi', function(req, res) {
  res.send('Hi there trader!');
});

//Let's refactor the callback function you've just completed.

//Instead of using `function`, use an arrow function instead.

//As an example:
// ```
// function(a, b) {
//    return a + b
// });
// ```
//can be written using arrow notation as:
//`(a, b) => {a + b}`

//Many people find the new arrow functions in ECMAScript 6 ("ES6") standard much easier to understand.
