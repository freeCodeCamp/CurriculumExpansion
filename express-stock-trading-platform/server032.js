const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi');

//The `app.get()` function actually takes two arguments, the second argument is a callback function that takes two other arguments itself: the first is the incoming request (`req`) and the second is the response (`res`) that you will send.  Part of the beauty of Express is that it makes accessing incoming requests and sending outgoing responses quite simple.  In the process, you can do your own processing in the callback function that you provide to Express.

//Add the following callback function as a second argument of `app.get()`:

// ```
// function (req, res) {
// });
// ```
