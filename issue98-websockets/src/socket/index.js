function setIoEvents(io) {


    io.on("connection", socket => {
        io.emit("user_connected");

        socket.on("message", (from, msg) => {
            console.log("I received a private message by ", from, " saying ", msg);
        });

        socket.on("user_disconnect", function () {
            io.broadcast.emit("user_disconnect");
        });
    });


}

module.exports = function(app) {
  const server = require("http").Server(app);
  const io = require("socket.io")(server);

  setIoEvents(io);

  return server;
};
