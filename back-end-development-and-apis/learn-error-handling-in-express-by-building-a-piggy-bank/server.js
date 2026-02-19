const express = require('express');
const { PiggyError, BankBrokenError, WeakToolError } = require('./errors');
const { 
  getState, 
  resetState, 
  deposit,
  hitPiggyBank 
} = require('./piggy-bank-state');

const app = express();
const PORT = 9000;

app.use(express.json());
app.set('json spaces', 2);

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to the Iron Piggy Bank API! Use /piggy-bank to inspect, /deposit to add money, /smash to break it open, and /reset to get a new piggy bank"
  });
});

// Route: inspect the bank
app.get('/piggy-bank', (req, res) => {
  const state = getState();
  
  if (state.isBroken) {
    return res.json({
      status: "broken",
      message: "The piggy bank is in pieces. The money is gone.",
      balance: 0
    });
  }

  res.json({
    status: "intact",
    message: "A solid iron piggy bank. You can hear coins inside.",
    integrity: `${state.integrity}/3`,
    approximateValue: "???" // you can't see the exact balance until you break it
  });
});

// Route: deposit money (easy to deposit)
app.post('/deposit', (req, res, next) => {
  if (getState().isBroken) {
    return next(new PiggyError("Cannot deposit into a broken piggy!", 400));
  }

  const { amount } = req.body;
  
  if (!amount || amount <= 0) {
    return next(new PiggyError("You must deposit a positive amount", 400));
  }

  deposit(amount);
  res.json({ message: `Clink! You dropped $${amount} into the piggy.` });
});

// Route: withdraw (throws an error because you can't just withdraw from a piggy bank)
app.post('/withdraw', (req, res, next) => {
  return next(
    new PiggyError("You cannot withdraw from a designated piggy bank. Try /smash instead.", 405)
  );
});

// Route: smash (the actual way to get money)
app.post('/smash', (req, res, next) => {
  if (getState().isBroken) {
    return next(new BankBrokenError());
  }

  const tool = req.headers['x-tool'];

  if (!tool) {
    return next(
      new PiggyError("You need a tool to break this! Send an 'x-tool' header.", 400)
    );
  }

  if (tool !== 'hammer' && tool !== 'rock') {
    return next(new WeakToolError(tool));
  }

  // Success logic (hit the bank)
  const result = hitPiggyBank();

  if (!result.broken) {
    res.json({
      message: "CLANG! You made a dent.",
      currentIntegrity: result.integrity,
      status: "cracked"
    });
  } else {
    // Broken logic
    res.json({
      message: "CRASH! The piggy bank shatters into pieces!",
      event: "money_released",
      amountRecovered: result.loot
    });
  }
});

// Route: reset the piggy bank
app.post('/reset', (req, res) => {
  resetState();
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
