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

      const msg = document.querySelector("#msg-input").value;

      if (msg) {
        socket.emit("newMessage", msg);
        app.helpers.addMessage(msg);
      }
    });
  },

  login: function() {},

  helpers: {
    updateUsersList: function(users) {},

    addMessage: function(message) {
      const template = document.querySelector(".msg-component");
      const clone = document.importNode(template.content, true);

      clone.querySelector(".msg-content").textContent = message;

      const chat_history = document.querySelector("#chat-history");

      chat_history.appendChild(clone);

      document.querySelector("#msg-input").value = "";
    }
  }
};
