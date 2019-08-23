"use strict";

const app = {
  chat: () => {    
    const socket = io("http://localhost:3000")
    // When socket conects
    socket.on("connect", () => {    

      // Update user list upon emitting updateUserList event
      socket.on("updateUserList", userlist =>
        app.helpers.updateUsersList(userlist)
      );

      // // Emitted whenever a message is received
      socket.on("newMessage", (username, message) => {
        app.helpers.addMessage(username, message, false);
      });

      socket.on("disconnect", userlist => {                
        app.helpers.updateUsersList(userlist)        
      });

      connectMessageInput(socket);
    });
  },

  helpers: {
    updateUsersList: userlist => {
      const userListComponent = document.querySelector("#user-list")
      app.helpers.clearComponent(userListComponent)      

      userlist.map(user => {
        const clone = app.helpers.createTemplateComponent(".user-component")

        const userItem = clone.querySelector(".user-list-item")
      
        userItem.textContent = user;

        userListComponent.appendChild(userItem)

      })
    },

    clearComponent: component => component.innerHTML = "",

    addMessage: (username, message, sended) => {
      const chat_message = app.helpers.createMessageComponent(username, message, sended);

      app.helpers.appendMessageHistory(chat_message);
      app.helpers.clearMessageInput();
    },

    createMessageComponent: (username, message, sended) => {
      
      const clone = app.helpers.createTemplateComponent(".msg-component")

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

    // Insert a message in the chat history
    appendMessageHistory: message => document.querySelector("#chat-history").appendChild(message),

    clearMessageInput: () => document.querySelector("#msg-input").value = "",

    getMessageTime: () => {
      const date = new Date();

      return `${date.getHours()}:${date.getMinutes()}`;
    },


    createTemplateComponent: templateID => {
      
      // Get the template in the DOM
      const template = document.querySelector(templateID);

      // Load the message template to the DOM
      return document.importNode(template.content, true);
    }
  }
};

const connectMessageInput = socket => {
  document.querySelector("#chat-form").addEventListener("submit", e => {
    e.preventDefault();

    const msg = document.querySelector("#msg-input").value;

    if (msg) {
      const username = window.localStorage.getItem("fccChatUsername")

      socket.emit("sendMessage", {
        username,
        msg        
      });      

      app.helpers.addMessage(username, msg, true);
    }
  });
};
