class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        self.__account_holder = account_holder
        self.__balance = initial_balance
        self.__transaction_history = []

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            self.__transaction_history.append(f"Deposited ${amount}")
            return f"Deposited ${amount}. New balance: ${self.__balance}"
        else:
            return "Deposit amount must be positive"

    def withdraw(self, amount):
        if amount > 0:
            if amount <= self.__balance:
                self.__balance -= amount
                self.__transaction_history.append(f"Withdrew ${amount}")
                return f"Withdrew ${amount}. New balance: ${self.__balance}"
            else:
                return "Insufficient funds"
        else:
            return "Withdrawal amount must be positive"

    def get_balance(self):
        return self.__balance

    def get_account_holder(self):
        return self.__account_holder

    def get_transaction_history(self):
        return self.__transaction_history.copy()

    def __str__(self):
        return f"Account Holder: {self.__account_holder}, Balance: ${self.__balance}"


# Test the BankAccount class
if __name__ == "__main__":
    # Create a new bank account
    account = BankAccount("John Doe", 1000)
    
    # Test deposit
    print(account.deposit(500))
    
    # Test withdraw
    print(account.withdraw(200))
    
    # Test insufficient funds
    print(account.withdraw(2000))
    
    # Test invalid amounts
    print(account.deposit(-100))
    print(account.withdraw(-50))
    
    # Display account info
    print(account)
    print(f"Account holder: {account.get_account_holder()}")
    print(f"Current balance: ${account.get_balance()}")
    print(f"Transaction history: {account.get_transaction_history()}")