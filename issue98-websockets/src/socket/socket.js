const db = require("../db/db");

// All socket.io code to deal with events
function setIoEvents(io) {

  io.of("/chatroom")
    .on("connection", socket => {

      socket.on("join", () => {
        // Send the userlist to be uppdated in screen
        socket.emit("updateUserList", db.getUserList());        

      })      

      // Emitted when a message is sended
      socket.on("newMessage", msg => socket.broadcast.emit("newMessage", msg));

      socket.on("disconnect", userId => {
        console.log(`Socket ${socket.id} disconnected.`);
        // db.removeUser(userId);
  
        // socket.broadcast.emit("updateUserList", db.getUserList());
  
        // socket.broadcast.emit("userDisconnected", getUserName(userId));
      });
    })
    
    ;
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





// Socket.io-auth
// const applyAuth = io => {
//   socketAuth(io, {
//     authenticate: async (socket, data, cb) => {
//       const { token } = data;

//       try {
//         const user = await verifyUser(token);        
        
//         socket.user = user;
        
//         return cb(null, true);
        
//       } catch (e) {
//         console.log("unauthirized");
//         return cb({ message: "UNAUTHORIZED" });
//       }
//     }
//   });
// };
// // Dummy user verification 
// async function verifyUser(token) {
//   return new Promise(async (resolve, reject) => {
      
//     let user = await db.getUserByToken(token);

//     if (user) {
//       return reject("Username already in use");      
//     }

//     return resolve(user);  
//   });
// }
