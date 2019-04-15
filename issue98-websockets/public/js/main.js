"use strict";

const app = {
  chat: function() {
    const socket = io("/chatroom");

    socket.on("connect", function() {
      socket.emit("join");

      socket.on("updateUserList", function(users) {
        app.helpers.updateUsersList(users);
      });

      socket.on("addMessage", function(message) {
        app.helpers.addMessage(message);
      });
    });

    document.querySelector("#chat-form").addEventListener("submit", e => {
      e.preventDefault();

      const msg = document.querySelector("#msg-input").nodeValue;

      if (msg) {
        socket.emit("newMessage", msg);
      }
    });
  },

  login: function() {},
  helpers: {
    updateUsersList: function(users) {},

    addMessage: function(message) {
      console.log(message);
    }
  }
};
