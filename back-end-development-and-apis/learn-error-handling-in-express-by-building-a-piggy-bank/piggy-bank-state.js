let piggyBank = {
  balance: 1000,
  integrity: 3, // represents hit points, needs 3 hits to break
  isBroken: false
};

function getState() {
  return piggyBank;
}

function resetState() {
  piggyBank = { 
    balance: 1000, 
    integrity: 3, 
    isBroken: false 
  };
  return piggyBank;
}

function deposit(amount) {
  piggyBank.balance += amount;
  return piggyBank.balance;
}

function hitPiggyBank() {
  piggyBank.integrity -= 1;

  if (piggyBank.integrity > 0) {
    return {
      broken: false,
      integrity: piggyBank.integrity
    };
  } else {
    const loot = piggyBank.balance;
    piggyBank.isBroken = true;
    piggyBank.balance = 0;
    
    return {
      broken: true,
      loot: loot
    };
  }
}

module.exports = {
  getState,
  resetState,
  deposit,
  hitPiggyBank
};
