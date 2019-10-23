const socket = io("http://localhost:3000");

// When socket conects
socket.on("connect", () => {
  // // Emitted whenever a message is received
  socket.on("newMessage", (username, message) => {
    addMessage(username, message, false);
  });

  socket.on("previousMessages", messages => {
    messages.map(msg => addMessage(msg.username, msg.msg, false));
  });
});

const addMessage = (username, message, sended) => {
  const chat_message = createMessageComponent(username, message, sended);

  appendMessageHistory(chat_message);
  clearMessageInput();
};

const createMessageComponent = (username, message, sended) => {
  const clone = createTemplateComponent(".msg-component");

  // Create a copy of the message component
  const bubble = clone.querySelector(".msg-bubble");

  bubble.className += sended ? " sended" : " received";

  bubble.querySelector(".msg-name").textContent = username;
  bubble.querySelector(".msg-content").textContent = message;

  bubble.querySelector(".msg-timestamp").textContent = getMessageTime();

  return bubble;
};

// Insert a message in the chat history
const appendMessageHistory = message =>
  document.querySelector(".chat-history").appendChild(message);

const clearMessageInput = () =>
  (document.querySelector(".msg-input").value = "");

const getMessageTime = () => {
  const date = new Date();

  return `${date.getHours()}:${date.getMinutes()}`;
};

const handleFormSubmit = e => {
  console.log(e);

  e.preventDefault();

  const username = document.querySelector(".username-input").value;
  const msg = document.querySelector(".msg-input").value;

  if (username && msg) {
    socket.emit("newMessage", {
      username,
      msg
    });

    addMessage(username, msg, true);
  }
};

const createTemplateComponent = templateID => {
  // Get the template in the DOM
  const template = document.querySelector(templateID);

  // Load the message template to the DOM
  return document.importNode(template.content, true);
};
