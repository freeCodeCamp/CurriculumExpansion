// Now you should be able to see the message you wrote on the chat printed out in the server console

// Open another browser and try to access the server url to see if tha chat is working
// Can you see a message you sent from one window to another?

// Its because your server is receiving the message but isn't propagating it to other users
// To do so you have to use the other socket emit signal you've learned
// 'broadcast.emit' emits the event to every connected socket

// Try to use this method to propagate the message sent by the client

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

io.on("connection", socket => {
  console.log(`Socket connected: ${socket.id}`);

  socket.on("newMessage", ({ username, msg }) => {
    console.log(username, message);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
