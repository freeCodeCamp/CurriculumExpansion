const socketAuth = require("socketio-auth");

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

// Socket.io-auth
const applyAuth = io => {
  socketAuth(io, {
    authenticate: async (socket, data, cb) => {
      const { token } = data;

      try {
        const user = await verifyUser(token);

        if (user) {
          socket.user = user;
          return cb(null, true);
        }
      } catch (e) {
        console.log("unauthirized");
        return cb({ message: "UNAUTHORIZED" });
      }
    }
  });
};

/**
 *    Creates the socket.io connections
 */
module.exports = app => {
  const http = require("http").Server(app);
  const io = require("socket.io")(http);

  // const socket_session = require("express-socket.io-session");

  // io.of("/chatroom").use(socket_session(session, { autosave: true }));

  applyAuth(io.of("/chatroom"));

  setIoEvents(io);

  return http;
};

async function verifyUser(token) {
  return new Promise((resolve, reject) => {
    const user = db.getUserByToken(token);

    if (!user) {
      return reject("USER_NOT_FOUND");
    }

    return resolve(user);
  });
}
