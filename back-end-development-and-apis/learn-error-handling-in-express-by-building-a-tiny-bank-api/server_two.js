// Maybe refactor the project to use Express 5 built-in async error handling
// so we don't need try/catch blocks in each route handler?

const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

const PORT = 7000;
app.use(express.json());

// pretty-print JSON responses
app.set('json spaces', 2);

const DB_PATH = path.join(__dirname, 'accounts.json');

// helper to read all accounts
const getAccounts = async () => {
  const data = await fs.readFile(DB_PATH, 'utf8');
  return JSON.parse(data);
};

// helper function to save accounts
const saveAccounts = async (accounts) => {
  await fs.writeFile(DB_PATH, JSON.stringify(accounts, null, 2));
};

// root route
app.get('/', (req, res) => {
  res.send('Tiny Bank API (Express 5 Style) running...');
});

/**
 * EXPRESS 5 ERROR HANDLING
 * No try/catch blocks needed
 */

// GET all accounts
app.get('/accounts', async (req, res) => {
  // If getAccounts() fails, Express catches the error automatically
  const accounts = await getAccounts();
  res.json(accounts);
});

// GET account by ID
app.get('/accounts/:id', async (req, res) => {
  const accounts = await getAccounts();
  const account = accounts.find(a => a.id === parseInt(req.params.id));
  
  if (!account) {
    const err = new Error('Account not found');
    err.status = 404;
    // just need to throw the error as no next(err) is required
    throw err;
  }
  
  res.json(account);
});

// POST transfer money
app.post('/transfer', async (req, res) => {
  const { fromId, toId, amount } = req.body;
  
  // basic validation
  if (!fromId || !toId || !amount) {
    const err = new Error('Missing required fields: fromId, toId, amount');
    err.status = 400;
    throw err;
  }

  if (amount <= 0) {
      const err = new Error('Transfer amount must be positive');
      err.status = 400;
      throw err;
  }

  const accounts = await getAccounts();
  const sender = accounts.find(a => a.id === fromId);
  const recipient = accounts.find(a => a.id === toId);

  if (!sender) {
    const err = new Error('Sender account not found');
    err.status = 404;
    throw err;
  }

  if (!recipient) {
    const err = new Error('Recipient account not found');
    err.status = 404;
    throw err;
  }

  if (sender.balance < amount) {
    const err = new Error('Insufficient funds');
    err.status = 409;
    throw err;
  }

  // transfer
  sender.balance -= amount;
  recipient.balance += amount;

  await saveAccounts(accounts);

  res.json({ 
    message: 'Transfer successful',
    senderName: sender.owner,
    recipientName: recipient.owner,
    amountTransferred: amount,
    senderNewBalance: sender.balance,
    recipientNewBalance: recipient.balance
  });
});

// basic error handler middleware
app.use((err, req, res, next) => {
  console.error('Captured by Express 5 handler:', err.message);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
});

app.listen(PORT, () => {
  console.log(`Tiny Bank (with Express 5) running on http://localhost:${PORT}`);
});
