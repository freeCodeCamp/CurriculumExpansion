const db = require("../db/db");

// All socket.io code to deal with events
function setIoEvents(io) {

  io.of("/chatroom")
    .on("connection", socket => {

      io.of("/chatroom").emit("updateUserList", db.getUserList());      

      // Emitted when a message is sended
      socket.on("newMessage", msg =>  {
        const { userId } = socket.request.session

        const user = db.getUserById(userId)

        socket.broadcast.emit("newMessage", user.name, msg)
      });

      socket.on("disconnect", () => {                 
        socket.broadcast.emit("updateUserList", db.getUserList());
      });
    })
    
    ;
}

/**
 *    Creates the socket.io connections
 */
module.exports = (app, session) => {

  const http = require("http").Server(app);
  const io = require("socket.io")(http);    

  io.of("/chatroom").use((socket, next) => {
    session(socket.request, socket.request.res, next)       
  });

  // Apply socket signals to the user's socket
  setIoEvents(io);

  return http;
};



