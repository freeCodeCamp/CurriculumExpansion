// Now we have to create the methods for the front to communicate with the backend
// In Socket.io protocol we have some methods to trigger and event
// Some of the most used are:
//          emit: sending message to the client
//          broadcast.emit: sending to all clients except sender

// You can send whatever you want in the socket event, it could be a text, an array or even an object

// So now we have to create in the client side a event that will be triggered whenever a new message is sended
// In order to do that we have to connect a signal to the send button from the chatroom

// We have already created a function that is bound to the send button, its called handleFormSubmit
// Inside of it there are some value checks and a black space that you should put your code
// Try to emit a message passing:
//  1° - the name of the event you want to trigger, it could be whatever you want
//  2° - the username and message values as a paramente

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
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
