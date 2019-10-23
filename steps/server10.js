// Now the socket io is applied to our server, everything is configured

// We can now step on the socket.io connection
// Every socket io interaction begin with the socket connection from the client to the server
// To listen the connect event we have to call the 'on' method from the io instance that we have created
// passing the event we want to listen as the first parameter and a callback that will be called when the event is fired
// In this case we want to listen de connection event

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

io.on("connection", () => {
  console.log("User connected");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
