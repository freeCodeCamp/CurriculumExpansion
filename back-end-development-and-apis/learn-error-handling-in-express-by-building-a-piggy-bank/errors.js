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

module.exports = {
  PiggyError,
  BankBrokenError,
  WeakToolError
};
