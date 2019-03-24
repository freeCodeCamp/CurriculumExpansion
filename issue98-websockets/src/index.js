const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", socket => {
  //   socket.emit("user_connected", )
  //   socket.on("message", function())
});

server.listen(3000, () => console.log("Server bound to PORT 3000"));
