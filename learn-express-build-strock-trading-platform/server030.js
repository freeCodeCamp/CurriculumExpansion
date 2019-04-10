const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

// 030.  Let's start by creating a basic endpoint at /hi.  If users go to http://localhost:3000/hi, they will receive the response "Hi there trader!".  Your express app has an 'app.get()' method that you can use, this takes two arguments: the path (in our case '/hi') and a callback.  The callback will be structured like:
// function (request, response) {
//   response.send('this message gets sent to the client');
// });

// or more succintly:
// (req, res) => {
//   res.send('this message gets sent to the client');
// }

// add a .get() method to the '/hi' path, send "Hi there trader!" as a response back to the client

// now go to http://localhost:3000/hi and confirm that you are receiving a message

app.get('/hi', (req, res) => {
  res.send('Hi there trader!');
});
