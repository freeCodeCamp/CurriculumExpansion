const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

io.on("connection", socket => {
  console.log("connected");
  //   socket.emit("user_connected", )
  //   socket.on("message", function())
});

server.listen(3000, () => console.log("Server bound to PORT 3000"));
