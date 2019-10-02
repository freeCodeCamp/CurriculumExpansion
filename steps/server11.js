// After open the localhost:3000 in the browser
// you should see the execution of the callback that you passed to the 'on' method from socket in the server side

// The callback you wrote actually receives one argument, that is the socket that triggered the event
// Try to print a message in the console that says: Socket connected: <id of the socket>
// When the event is triggered and see what if it working

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
