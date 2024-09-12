1. You should define a class named `BankAccount` with a `constructor` that has a `balance` parameter (default value of 0). The constructor should also initialize an empty `transactions` array to store transaction records.

2. You should define a method named `deposit` with an `amount` parameter. This method should:
    - Check if the `amount` is greater than 0.
    - If the amount is valid, push an object with the properties `type: 'deposit'` and the `amount` into the `transactions ` array.
    - Call the `updateBalance` method to update the account's balance.
    - Log a message to the console indicating the deposit was successful and display the new balance.
    - If the `amount` is invalid, log an error message indicating that the deposit amount must be greater than zero.

3. You should define a method named `withdraw` with an `amount` parameter. This method should:
    - Check if the `amount` is greater than 0 and less than or equal to the current `balance`.
    - If valid, push an object with the properties `type: 'withdraw'` and the `amount` into the `transactions` array.
    - Call the `updateBalance` method to update the account's balance.
    - Log a message to the console indicating the withdrawal was successful and display the new balance.
    - If the `amount` is invalid or exceeds the balance, log an error message indicating insufficient balance or invalid amount.

4. You should define a method named `checkBalance` that logs the current account balance to the console.

5. You should define a method named `updateBalance`. This method should:
    - Use the `reduce` function to sum the transactions in the `transactions` array.
    - Update the `balance` by adding up all the deposit amounts and subtracting all the withdrawal amounts.

6. You should define a method named listAllDeposits. This method should:
    - Use the `filter` function to create a new array containing only the transactions with `type: 'deposit'`.
    - Use the `map` function to extract the `amount` from each deposit transaction.
    - Log the list of deposit amounts to the console and return this list.

7. You should define a method named `listAllWithdrawals`. This method should:
    - Use the `filter` function to create a new array containing only the transactions with `type: 'withdraw'`.
    - Use the `map` function to extract the `amount` from each withdrawal transaction.
    - Log the list of withdrawal amounts to the console and return this list.

8. You should create an instance of the BankAccount class named myAccount. Then, you should:
    - Use the `deposit` method to deposit into the account.
    - Use the `withdraw` method to withdraw from the account.
    - Use the `checkBalance` method to log the current balance to the console.
    - Use the `listAllDeposits` method to list all deposits made.
    - Use the `listAllWithdrawals` method to list all withdrawals made.