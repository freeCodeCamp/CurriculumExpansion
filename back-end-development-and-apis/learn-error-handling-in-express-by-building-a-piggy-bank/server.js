const express = require('express');
const app = express();
const PORT = 9000;

app.use(express.json());
app.set('json spaces', 2);

// --- Custom error classes ---
class PiggyError extends Error {
  constructor(message, status) {
    super(message);
    this.name = this.constructor.name;
    this.status = status || 500;
  }
}

class BankBrokenError extends PiggyError {
  constructor(message = "The piggy bank is already broken!") {
    super(message, 410); // 410 Gone
  }
}

class WeakToolError extends PiggyError {
  constructor(tool) {
    super(`A '${tool}' is too weak. You need something heavy like a 'hammer'.`, 406); // Not Acceptable
  }
}

// piggy bank state
let piggyBank = {
  balance: 1000,
  integrity: 3, // represents hit points, needs 3 hits to break
  isBroken: false
};

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Iron Piggy Bank API! Use /piggy-bank to inspect, /deposit to add money, /smash to break it open, and /reset to get a new piggy bank and /smash to break it open, and /reset to get a new piggy bank"
  });
});

// Route: inspect the bank
app.get('/piggy-bank', (req, res) => {
  if (piggyBank.isBroken) {
    return res.json({
      status: "broken",
      message: "The piggy bank is in pieces. The money is gone.",
      balance: 0
    });
  }

  res.json({
    status: "intact",
    message: "A solid iron piggy bank. You can hear coins inside.",
    integrity: `${piggyBank.integrity}/3`,
    approximateValue: "???" // you can't see the exact balance until you break it (integrity becoming 0/3)
  });
});

// Route: deposit money (easy to deposit)
app.post('/deposit', (req, res, next) => {
  if (piggyBank.isBroken) {
    return next(new PiggyError("Cannot deposit into a broken piggy!", 400));
  }

  const { amount } = req.body;
  
  if (!amount || amount <= 0) {
    return next(new PiggyError("You must deposit a positive amount", 400));
  }

  piggyBank.balance += amount;
  res.json({ message: `Clink! You dropped $${amount} into the piggy.` });
});

// Route: withdraw (hard to withdraw)
app.post('/withdraw', (req, res, next) => {
  return next(new PiggyError("You cannot withdraw from a designated piggy bank. Try /smash instead.", 405));
});

// Route: smash (the actual way to get money)
app.post('/smash', (req, res, next) => {
  if (piggyBank.isBroken) {
    return next(new BankBrokenError());
  }

  const tool = req.headers['x-tool'];

  if (!tool) {
    return next(new PiggyError("You need a tool to break this! Send an 'x-tool' header.", 400));
  }

  if (tool !== 'hammer' && tool !== 'rock') {
    return next(new WeakToolError(tool));
  }

  // Success logic (hit the bank)
  piggyBank.integrity -= 1;

  if (piggyBank.integrity > 0) {
    res.json({
      message: "CLANG! You made a dent.",
      currentIntegrity: piggyBank.integrity,
      status: "cracked"
    });
  } else {
    // Broken logic
    const loot = piggyBank.balance;
    piggyBank.isBroken = true;
    piggyBank.balance = 0; // Empty the bank

    res.json({
      message: "CRASH! The piggy bank shatters into pieces!",
      event: "money_released",
      amountRecovered: loot
    });
  }
});

// Route: reset the piggy bank
app.post('/reset', (req, res) => {
  piggyBank = { balance: 1000, integrity: 3, isBroken: false };
  res.json({ message: "Piggy bank replaced with a new one." });
});


// Global Error Handler
app.use((err, req, res, next) => {
  
  // We can now check if the error is one of our custom ones
  if (err instanceof PiggyError) {
    console.log(`[CustomError] ${err.name}: ${err.message}`);
  } else {
    console.error(`[UnexpectedError]`, err);
  }

  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500,
      type: err.name // helpful for debugging!
    }
  });
});

app.listen(PORT, () => {
  console.log(`Iron Piggy bank running on port ${PORT}...`);
});

/*
Summary of error handling implementations:

  1. Errors handled:
     - PiggyError (400 Bad Request): Used for invalid logic like negative deposits or missing headers.
     - PiggyError (405 Method Not Allowed): Used for the /withdraw route to guide users to /smash.
     - BankBrokenError (410 Gone):  Specific subclass used when the resource (piggy bank) is already destroyed.
     - WeakToolError (406 Not Acceptable): Specific subclass for invalid inputs in the /smash route.

  2. Pattern used: centralized custom error handling
     - Custom classes: Extends standard JS Error to add properties like 'status'.
     - Inheritance: BankBrokenError and WeakToolError inherit from PiggyError, allowing for grouped checks (instanceof PiggyError).
     - Asynchronous propagation: Routes pass errors to 'next(err)', delegating handling to the end of the chain.
     - Centralized handler: A single error-handling middleware (4 arguments) catches all errors used in `next()`.
     - Operational vs programmer errors: The handler distinguishes between known app errors (PiggyError) and unexpected crashes.
*/
