// In order to se if this event is running correctly we have to connect the client to our socket
// To do so open the index.html that we have created for you, in this file you should see an import to the socket.io CDN
// Since the socket.io library is already imported you have an 'io' instance that correspond to the socket for the client
// Use it as a constructor passing the server url <localhost:3000> and assign the result to a variable called socket

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
