// Now if you have 2 windows openned you should see the message sent going
// as a received message in the another window

// The message is being attached to the chat user through a function that we have wrote for you
// But something is missing, what happen when you refresh the page? Does the messages still in the history?

// To get it right we will create an array of messages that will be sent to every new user
// in order to get up-to-date message history

// Create an array and store the messages from the send message event in it

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
    socket.broadcast.emit("newMessage", username, msg);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
