const socketAuth = require("socketio-auth")

const db = require("../db/db");

// All socket.io code to deal with events
function setIoEvents(io) {
  io.of("/chatroom").on("connection", socket => {
    console.log(`Socket ${socket.id} connected.`);

    // const userId = socket.handshake.session;

    // Send the userlist to be uppdated in screen
    // socket.emit("updateUserList", db.getUserList());

    // Emitted when user left the chatroom
    socket.on("disconnect", userId => {
      console.log(`Socket ${socket.id} disconnected.`);
      // db.removeUser(userId);

      // socket.broadcast.emit("updateUserList", db.getUserList());

      // socket.broadcast.emit("userDisconnected", getUserName(userId));
    });

    // Emitted when a message is sended
    // socket.on("newMessage", msg => socket.broadcast.emit("newMessage", msg));
  });
}


const applyAuth = io => {
  socketAuth(io, {
    authenticate: async (socket, data, cb) => {
      const { token } = data;

      console.log(token)

      const user = await db.getUserByToken(token);

      if (user){
        socket.user = user;        
        return cb(null, true);
      }
      console.log("unauthirized")
      return cb({message: "UNAUTHORIZED"});
    }
  })  
}

/**
 *    Creates the socket.io connections
 */
module.exports = (app) => {
  const http = require("http").Server(app);
  const io = require("socket.io")(http);
  

  // const socket_session = require("express-socket.io-session");

  // io.of("/chatroom").use(socket_session(session, { autosave: true }));
  
  applyAuth(io)

  setIoEvents(io);

  return http;
};

const getUserName = userId => db.getUser(userId);
