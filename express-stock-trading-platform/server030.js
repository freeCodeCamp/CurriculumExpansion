const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

//Let's try to create a basic endpoint at `/hi`. If users go to http://localhost:3000/hi, we want them to receive the response "Hi there trader!".

//Add a `GET` route to your app by using the `app.get()` method and specify the path as `'/hi'` in between the parentheses.
