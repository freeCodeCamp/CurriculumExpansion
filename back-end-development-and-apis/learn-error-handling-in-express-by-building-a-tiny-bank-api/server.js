const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

const PORT = 9000;
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
  res.send('Tiny Bank API running...');
});

// a temporary route to test 500 errors
/*
app.get('/broken', (req, res, next) => {
  const err = new Error("Whoops! Something went wrong on the server");
  // no need to set a status, it defaults to 500
  next(err);
});
*/

// GET all accounts
app.get('/accounts', async (req, res, next) => {
  try {
    const accounts = await getAccounts();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
});

// GET account by ID
app.get('/accounts/:id', async (req, res, next) => {
  try {
    const accounts = await getAccounts();
    const account = accounts.find(a => a.id === parseInt(req.params.id));
    
    if (!account) {
      const err = new Error('Account not found');
      err.status = 404;
      throw err;
    }
    
    res.json(account);
  } catch (err) {
    next(err);
  }
});

// POST transfer money
app.post('/transfer', async (req, res, next) => {
  try {
    const { fromId, toId, amount } = req.body;
    
    // basic validation for required fields
    if (!fromId || !toId || !amount) {
      const err = new Error('Missing required fields: fromId, toId, amount');
      err.status = 400;
      throw err;
    }

    // basic validation for positive amount
    if (amount <= 0) {
        const err = new Error('Transfer amount must be positive');
        err.status = 400;
        throw err;
    }

    const accounts = await getAccounts();
    const sender = accounts.find(a => a.id === fromId);
    const recipient = accounts.find(a => a.id === toId);

    // sender not found
    if (!sender) {
      const err = new Error('Sender account not found');
      err.status = 404;
      throw err;
    }

    // recipient not found
    if (!recipient) {
      const err = new Error('Recipient account not found');
      err.status = 404;
      throw err;
    }

    // insufficient funds logic
    if (sender.balance < amount) {
      const err = new Error('Insufficient funds');
      err.status = 409; // conflict
      throw err;
    }

    // Perform transfer
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

  } catch (err) {
    next(err);
  }
});

// Basic error handler middleware
app.use((err, req, res, next) => {
  console.error("Captured by Error handler middleware: ", err.message);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
});

app.listen(PORT, () => {
  console.log(`Tiny Bank running on http://localhost:${PORT}...`);
});

// Errors handled:
// - Global handler middleware: handles expected errors (operational) and unexpected Errors (bugs)
// - next(err): used to pass async errors to the global handler
// - 404: account not found
// - 400: missing required fields
// - 400: transfer amount must be positive
// - 404: sender account not found
// - 404: recipient account not found
// - 409: insufficient funds
// - 500: internal server error