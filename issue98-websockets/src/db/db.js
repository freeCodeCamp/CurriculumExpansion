const users = [];

const nameAlreadyInserted = username =>
  users.some(user => user.name === username);

const getUser = id => users.find(user => user.id === id);

const addUser = ({ id, username }) => {
  if (nameAlreadyInserted(username)) return false;

  users.push({ id, username });
  return true;
};

const removeUser = id => users.filter(user => !user.id === id);

const getUserList = () => users.map(user => user.username);

module.exports = {
  addUser,
  getUser,
  removeUser,
  getUserList
};
