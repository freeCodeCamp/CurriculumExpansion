
const socket_session = require("express-socket.io-session");
const db = require("../db/db");

// All socket.io code to deal with events
function setIoEvents(io) {

  io.of("/chatroom").on("connection", socket => {
    // const userId = socket.handshake.session;

    // Send the userlist to be uppdated in screen
    socket.emit("updateUserList", db.getUserList());

    // Emitted when user left the chatroom
    socket.on("disconnect", userId => {
      socket.broadcast.emit("user_disconnect");
    });

    // Emitted when a message is sended
    socket.on("newMessage", msg => {
      socket.broadcast.emit("addMessage", msg);
    });
  });
}

/** 
 *    Creates the socket.io connections
 */
module.exports = (app, session) => {

  const http = require("http").Server(app);
  const io = require("socket.io")(http);  

  io.of("/chatroom").use(socket_session(session, { autosave: true }));

  setIoEvents(io);

  return io;
};
