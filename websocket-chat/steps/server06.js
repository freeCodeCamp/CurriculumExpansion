// Hit the endpoint in the browser, can you see the message?

// Now the user that request this endpoinst should get back some resource from the server
// In our case it will be a html file of the chatroom

// In order to send a html file we have to use the 'sendFile' from the response parameter of the callback function
// The html we want is called index.html
// Try to send it to the user in the get enpoint

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Application Homepage");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
