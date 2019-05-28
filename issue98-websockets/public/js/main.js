"use strict";

const app = {
  chat: () => {
    io("/chatroom").on("connect", socket => {
      socket.on("updateUserList", userlist =>
        app.helpers.updateUsersList(userlist)
      );

      socket.on("addMessage", message => {
        app.helpers.addMessage(message, false);
      });

      connectMessageInput(socket);
    });
  },

  login: () => {},

  helpers: {
    updateUsersList: userlist => console.log(userlist),

    addMessage: (message, sended) => {
      const template = document.querySelector(".msg-component");
      const clone = document.importNode(template.content, true);

      const bubble = clone.querySelector(".msg-bubble");

      bubble.className += sended ? " sended" : " received";

      bubble.querySelector(".msg-name").textContent = "freeCodeCamp";
      bubble.querySelector(".msg-content").textContent = message;

      bubble.querySelector(
        ".msg-timestamp"
      ).textContent = this.getMessageTime();

      document.querySelector("#chat-history").appendChild(clone);

      document.querySelector("#msg-input").value = "";
    },

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
      app.helpers.addMessage(msg, true);
    }
  });
};
