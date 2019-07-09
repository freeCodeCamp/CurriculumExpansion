"use strict";

const app = {
  chat: () => {
    const socket = io("/chatroom");

    // When socket conects
    socket.on("connect", () => {

      socket.emit("join");

      // Update user list upon emitting updateUserList event
      socket.on("updateUserList", userlist =>
        app.helpers.updateUsersList(userlist)
      );

      // // Emitted whenever a message is received
      socket.on("newMessage", (username, message) => {
        app.helpers.addMessage(username, message, false);
      });

      socket.on("userDisconnected", userName => {
        // TODO user disconnected warning
        
      });

      connectMessageInput(socket);
    });
  },

  helpers: {
    updateUsersList: userlist => {
      console.log(userlist);
    },

    addMessage: (username, message, sended) => {
      const chat_message = app.helpers.createMessageComponent(username, message, sended);

      app.helpers.appendMessageHistory(chat_message);
      app.helpers.clearMessageInput();
    },

    createMessageComponent: (username, message, sended) => {
      const template = document.querySelector(".msg-component");

      // Load the message template to the DOM
      const clone = document.importNode(template.content, true);

      // Create a copy of the message component
      const bubble = clone.querySelector(".msg-bubble");

      bubble.className += sended ? " sended" : " received";

      bubble.querySelector(".msg-name").textContent = username;
      bubble.querySelector(".msg-content").textContent = message;

      bubble.querySelector(
        ".msg-timestamp"
      ).textContent = app.helpers.getMessageTime();

      return bubble;
    },

    appendMessageHistory: message =>
      document.querySelector("#chat-history").appendChild(message),

    clearMessageInput: () => (document.querySelector("#msg-input").value = ""),

    getMessageTime: () => {
      const date = new Date();

      return `${date.getHours()}:${date.getMinutes()}`;
    }
  }
};

const connectMessageInput = socket => {
  document.querySelector("#chat-form").addEventListener("submit", e => {
    e.preventDefault();

    const msg = document.querySelector("#msg-input").value;

    if (msg) {
      socket.emit("newMessage", msg);      

      const username = window.localStorage.getItem("fccChatUsername")
      app.helpers.addMessage(username, msg, true);
    }
  });
};
