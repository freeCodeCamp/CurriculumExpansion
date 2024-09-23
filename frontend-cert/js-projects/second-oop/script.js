class BankAccount {
    constructor(balance = 0) {
      this.balance = balance;
      this.transactions = [];
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.transactions.push({ type: 'deposit', amount });
        this.updateBalance();
        console.log(`Successfully deposited $${amount}. New balance: $${this.balance}`);
      } else {
        console.log('Deposit amount must be greater than zero.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.transactions.push({ type: 'withdraw', amount });
        this.updateBalance();
        console.log(`Successfully withdrew $${amount}. New balance: $${this.balance}`);
      } else {
        console.log('Insufficient balance or invalid amount.');
      }
    }
  
    checkBalance() {
      console.log(`Current balance: $${this.balance}`);
    }
  
    updateBalance() {
      this.balance = this.transactions.reduce((acc, transaction) => {
        return transaction.type === 'deposit' ? acc + transaction.amount : acc - transaction.amount;
      }, 0);
    }
  
    listAllDeposits() {
      const deposits = this.transactions
        .filter(transaction => transaction.type === 'deposit')
        .map(transaction => transaction.amount);
      console.log('Deposits:', deposits);
      return deposits;
    }
  
    listAllWithdrawals() {
      const withdrawals = this.transactions
        .filter(transaction => transaction.type === 'withdraw')
        .map(transaction => transaction.amount);
      console.log('Withdrawals:', withdrawals);
      return withdrawals;
    }
}
  
const myAccount = new BankAccount();
  
myAccount.deposit(100);
myAccount.deposit(500);
myAccount.withdraw(30);
myAccount.withdraw(100);
myAccount.checkBalance();
myAccount.listAllDeposits();
myAccount.listAllWithdrawals();
  