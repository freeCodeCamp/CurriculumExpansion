const users = [];

const nameAlreadyInserted = username => users.some(user => user.name === username);

const getUserById = async id => users.find(user => user.id === id);

const getUserByToken = async token => users.find(user => user.token === token);

const addUser = ({ id, username }) => {
  if (nameAlreadyInserted(username)) return false;

  users.push({ id, username });
  return true;
};

const removeUser = id => users.filter(user => !user.id === id);

const getUserList = () => users.map(user => user.username);

module.exports = {
  addUser,
  getUserById,
  getUserByToken,
  removeUser,
  getUserList
};
