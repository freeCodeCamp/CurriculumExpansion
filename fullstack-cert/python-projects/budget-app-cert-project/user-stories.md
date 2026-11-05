1. You should have a `Category` class that accepts a name as the argument.
1. The `Category` class should have a class attribute named `statement_width`, initially set to `30`. Statement formatting should access it through `self.statement_width`, so changing `Category.statement_width` also changes the width used by existing instances that have not overridden it.
1. The `Category` class should have an instance attribute `ledger` that is a list, and contains the list of transactions.
1. The `Category` class should have the following methods:

   - A `deposit` method that accepts an amount and an optional description. If no description is given, it should default to an empty string. The method should append an object to the `ledger` list in the form of `{'amount': amount, 'description': description}`.
   - A `withdraw` method that accepts an amount and an optional description (default to an empty string). The method should store in `ledger` the amount passed in as a negative number, and should return `True` if the withdrawal succeeded and `False` otherwise.
   - A `get_balance` method that returns the current category balance based on `ledger`.
   - A `transfer` method that accepts an amount and another `Category` instance, withdraws the amount with description `Transfer to [Destination]`, deposits it into the other category with description `Transfer from [Source]`, where `[Destination]` and `[Source]` should be replaced by the name of destination and source categories. The method should return `True` when the transfer is successful, and `False` otherwise.
   - A `check_funds` method that accepts an amount and returns `False` if it exceeds the balance or `True` otherwise. This method must be used by both the `withdraw` and `transfer` methods.

1. The `Category` class should implement `__len__` so that `len(category)` returns the number of entries in its ledger. An empty category should return `0`.
1. The `Category` class should have a `__getitem__` method that returns ledger entries by index or slice:
   - `category[0]` should return the first transaction, and `category[-1]` should return the most recent transaction.
   - `category[1:3]` should return a list containing the transactions at indices `1` and `2`, when present.
   - An integer index outside the ledger should raise an `IndexError`.
1. The `Category` class should have an `__iter__` method that returns an iterator over its ledger entries in insertion order:
   - A `for` loop over a category should yield each transaction dictionary.
   - Iterating over an empty category should yield no transactions.
   - Each call to `iter(category)` should return a new iterator, so the category can be traversed more than once and independent iterations do not share a position.

1. When a `Category` object is printed, it should:  
   - Use f-strings with dynamic field widths to make every statement line exactly `self.statement_width` characters long.
   - Display a title with the category name centered between `*` characters. Truncate the name to the statement width if it is longer.
   - Reserve the last seven characters of each transaction line for its amount, formatted to two decimal places, limited to seven characters, and right-aligned. Left-align the description in the remaining `self.statement_width - 7` characters, truncating it to fit.
   - Show a final line `Total: [balance]`, with the balance formatted to two decimal places and trailing spaces added to reach the statement width.

   Statement widths will be integers of at least `30`, and the total text will fit within the selected width. At the default width, descriptions have `23` characters available; at width `40`, they have `33`.
   
   Here is an example usage:
   
   ```py
   food = Category('Food')
   food.deposit(1000, 'initial deposit')
   food.withdraw(10.15, 'groceries')
   food.withdraw(15.89, 'restaurant and more food for dessert')
   clothing = Category('Clothing')
   food.transfer(50, clothing)
   print(food)
   ```

   And here is an example of the output at the default width of `30`. The total line includes trailing spaces to reach that width:

   ```md
   *************Food*************
   initial deposit        1000.00
   groceries               -10.15
   restaurant and more foo -15.89
   Transfer to Clothing    -50.00
   Total: 923.96                  
   ```

1. You should have a function outside the `Category` class named `create_spend_summary(categories)` that takes a list of categories and returns a dictionary mapping each category name to its percentage of total spending:
   - Calculate spending by iterating over each category's transactions. Count negative ledger amounts as spending, including transfers, and exclude deposits.
   - Divide each category's spending by the total spending across all supplied categories and multiply by `100`.
   - Return the percentages as numbers rounded to two decimal places, not formatted strings. Trailing zeros do not need to be displayed.
   - If total spending is zero, return `0.0` for every supplied category.
   - If the list is empty, return an empty dictionary.
   - You can assume category names are unique.

   For example:

   ```py
   food = Category('Food')
   food.deposit(200)
   food.withdraw(75)
   clothing = Category('Clothing')
   clothing.deposit(100)
   clothing.withdraw(25)

   print(create_spend_summary([food, clothing]))
   # {'Food': 75.0, 'Clothing': 25.0}
   ```

   Spending amounts of `1` and `2` should produce percentages of `33.33` and `66.67`, respectively.
