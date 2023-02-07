// The chat is working, your job here is done!

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

const messages = [];

io.on("connection", socket => {
  socket.emit("previousMessages", messages);

  socket.on("newMessage", ({ username, msg }) => {
    messages.push({ username, msg });

    socket.broadcast.emit("newMessage", username, msg);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
