const db = require("../db/db");
const socketSession =  require('express-session-socket.io')

// All socket.io code to deal with events
function setIoEvents(io) {

  io.of("/chatroom")
    .on("connection", socket => {

      socket.on("join", () => {
        // Send the userlist to be uppdated in screen
        socket.emit("updateUserList", db.getUserList());        
      })      

      // Emitted when a message is sended
      socket.on("newMessage", msg =>  {
        const { userId } = socket.request.session

        const user = db.getUserById(userId)

        socket.broadcast.emit("newMessage", user.name, msg)
      });

      socket.on("disconnect", userId => {                 
        socket.broadcast.emit("updateUserList", db.getUserList());
  
        // socket.broadcast.emit("userDisconnected", getUserName(userId));
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



