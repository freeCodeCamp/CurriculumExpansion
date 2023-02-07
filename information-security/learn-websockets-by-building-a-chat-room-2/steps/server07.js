// You should be able to see the page in the browser when access localhost:3000

// Now we have to apply the socket.io protocol to our server
// The CDN to the socket.io is already placed inside the index.html and the package is already installed in the Server
// We want to import that package to our main file and insert into our app instance

// The fist thing we should do is to import the http built in node module to extract the server from the app instance

// Use the require syntax to import the http
// After that call the createServer from the http module passing the app as a paramenter

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
