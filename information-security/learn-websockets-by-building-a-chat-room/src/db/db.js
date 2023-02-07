const uuid = require("uuid")

const users = [];

// Checks if there is another user that already take this username
const validateUsername = username =>  !users.some(user => user.name === username);

const getUserById = id => users.find(user => user.id === id);

// Stores the new user and return its ID
const addUser = username => {  
  const id = uuid()
  users.push({ id, name: username });

  return id  
};

// Removes a user by its ID
const removeUser = id => users.filter(user => user.id !== id);

// Get all stored users
const getUserList = () => users.map(user => user.name);

module.exports = {
  addUser,
  getUserById,
  removeUser,
  getUserList,
  validateUsername
};
''