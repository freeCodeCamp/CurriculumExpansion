const express = require('express');
const app = express();

// 020. Instruct your app to listen for requests on port 3000, using the listen() function.  This function takes two arguments: the port number and a callback function.  For your callback function, simply console log 'Your app is listening on port 3000.' to confirm that your app is running.

// Now, if you run your file ('node server.js'), you should see the message 'Your app is listening on port 3000.' in your console.

app.listen(3000, function() {
  console.log('Your app is listening on port 3000.');
});
