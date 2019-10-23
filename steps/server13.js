// You should try to test if sendMessage function is working

// What happened? You saw something working? No?
// It's because you haven't handle the new event you created in the frontend

// To do so, inside the 'io.on' method you can handle any event using the
// 'socket.on' passing the event name and a callback that you wnat to be executed

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
