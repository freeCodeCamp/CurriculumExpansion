const http = require("http");
const socket_io = require("socket.io");
const socket_session = require("express-socket.io-session");
const db = require("../db/db");

function setIoEvents(io) {
  io.of("/chatroom").on("connection", socket => {
    // const userId = socket.handshake.session;

    socket.emit("updateUserList", db.getUserList());

    socket.on("disconnect", userId => {
      io.broadcast.emit("user_disconnect");
    });

    socket.on("newMessage", msg => {
      socket.broadcast.emit("addMessage", msg);
    });
  });
}

module.exports = (app, session) => {
  const server = http.Server(app);
  const io = socket_io(server);

  io.of("/chatroom").use(socket_session(session, { autosave: true }));

  setIoEvents(io);

  return server;
};
