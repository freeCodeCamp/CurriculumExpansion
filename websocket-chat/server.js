// chat dependencies
const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const { PORT = 3000 } = process.env;

// middlewares
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// socket io

const messages = [];

io.on("connection", socket => {
  socket.emit("previousMessages", messages);

  socket.on("newMessage", ({ username, msg }) => {
    messages.push({ username, msg });
    socket.broadcast.emit("newMessage", username, msg);
  });
});

app.use("/", (req, res) => {
  res.sendFile("index.html");
});

server.listen(PORT, () =>
  console.log(`Server bound to http://localhost:${PORT}`)
);
