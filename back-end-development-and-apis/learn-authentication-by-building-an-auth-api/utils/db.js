const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "../data/users.json");

function readUsers() {
  const data = fs.readFileSync(DB_PATH, "utf-8").trim();
  if (!data) return [];
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
}

function findByEmail(email) {
  return readUsers().find((u) => u.email === email) || null;
}

function findById(id) {
  return readUsers().find((u) => u.id === id) || null;
}

module.exports = { readUsers, writeUsers, findByEmail, findById };
