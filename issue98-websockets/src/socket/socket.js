const db = require("../db/db");

// All socket.io code to deal with events
function setIoEvents(io) {

  io.on("connection", socket => {

      io.sockets.emit("updateUserList", db.getUserList());      

      // Emitted when a message is sended
      socket.on("sendMessage", ({username, msg}) =>  {
        socket.broadcast.emit("newMessage", username, msg)
      });

      socket.on("disconnect", () => {                         
        socket.broadcast.emit("updateUserList", db.getUserList());
      });
    })
    
    
}

/**
 *    Creates the socket.io connections
 */
module.exports = app => {

  const http = require("http").Server(app);
  const io = require("socket.io")(http);    

  // Apply socket signals to the user's socket
  setIoEvents(io);

  return http;
};



