const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});

app.get('/hi');

//Part of the beauty of Express is that it makes accessing incoming requests and sending outgoing responses quite simple. Pass a callback function as the second argument of `app.get()`. The callback function should itself accept two arguments: the incoming request (`req`), and the response (`res`) that you will send. Here's an example:

// `function(request, response) {}`
