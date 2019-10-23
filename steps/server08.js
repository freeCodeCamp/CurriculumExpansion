// Now we have to create a socket io instance
// In order to do so we have to require the socket.io package
// and call it as a constructor passing our brand new server instance
// You can call it 'io'

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
