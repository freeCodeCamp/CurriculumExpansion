const fs = require('fs').promises;
const path = require('path');

const DB_PATH = path.join(__dirname, 'accounts.json');

async function getAccounts() {
  const data = await fs.readFile(DB_PATH, 'utf8');
  return JSON.parse(data);
}

async function saveAccounts(accounts) {
  await fs.writeFile(DB_PATH, JSON.stringify(accounts, null, 2));
}

module.exports = {
  getAccounts,
  saveAccounts
};
