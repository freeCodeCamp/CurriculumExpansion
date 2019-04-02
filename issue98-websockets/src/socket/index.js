function setIoEvents(io) {
  io.of("/chatroom").on("connection", socket => {
    socket.on("join", roomId => {
      socket.emit("userListUpdate");

      socket.join(roomId);
    });

    socket.on("user_disconnect", () => {
      io.broadcast.emit("user_disconnect");
    });

    socket.on("newMessage", (roomId, msg) => {
      socket.broadcast.to(roomId).emit("addMessage", msg);
    });
  });
}

module.exports = function(app) {
  const server = require("http").Server(app);
  const io = require("socket.io")(server);

  setIoEvents(io);

  return server;
};
