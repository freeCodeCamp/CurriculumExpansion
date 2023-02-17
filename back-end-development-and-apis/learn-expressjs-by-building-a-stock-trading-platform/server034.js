const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi', function(req, res) {});

//Inside the callback, send a response saying "Hi there trader!" by calling the `res.send()` method.  Provide the string message as an argument in between the parentheses.
