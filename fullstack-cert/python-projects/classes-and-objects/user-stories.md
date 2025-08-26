1. Create a class named `BankAccount` with an `__init__` method that takes `account_holder` and `initial_balance` (default 0) parameters.
2. In the `__init__` method, create private attributes `__account_holder`, `__balance`, and `__transaction_history` (empty list).
3. Create a `deposit` method that takes an `amount` parameter and adds it to the balance if positive, otherwise returns "Deposit amount must be positive".
4. Create a `withdraw` method that takes an `amount` parameter and subtracts it from balance if positive and sufficient funds exist, otherwise returns appropriate error messages.
5. Create a `get_balance` method that returns the current balance.
6. Create a `get_account_holder` method that returns the account holder's name.
7. Create a `get_transaction_history` method that returns a copy of the transaction history list.
8. Create a `__str__` method that returns a string representation of the account with holder name and balance.
9. Add transaction logging to both `deposit` and `withdraw` methods by appending transaction details to `__transaction_history`.
10. Test your class by creating a BankAccount instance and calling all methods with various inputs.