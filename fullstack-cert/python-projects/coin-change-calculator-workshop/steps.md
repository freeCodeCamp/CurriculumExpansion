# Coin Change Calculator Workshop Steps

## Step 1

### Description

In a previous lecture, you learned about dynamic programming and how tabulation builds a solution bottom-up, by solving the smallest subproblems first and storing their results in a table.

In this workshop, you will put that into practice by building a coin change calculator. Given a list of coin denominations and a target amount, it will compute the minimum number of coins needed to make that amount, assuming you have an unlimited supply of each coin.

To begin, create a `min_coins` function with `coins` and `amount` parameters.

`coins` is the list of available coin denominations, and `amount` is the target amount the function will try to make.

Add the `pass` keyword inside the function for now.

### Seed

```py
--fcc-editable-region--

--fcc-editable-region--
```

## Step 2

### Description

The function will use a list called `table` to store the solution to each subproblem. Each index of `table` represents an amount from `0` up to `amount`, and the value at that index will be the minimum number of coins needed to make that amount.

You already know the answer for an amount of `0`: you need `0` coins. For every other amount, you don't know the answer yet. You can use `float('inf')` as a placeholder for those amounts. It represents infinity, so it means the amount can't be reached yet, and any real number of coins will be smaller than it.

Replace the `pass` keyword with a `table` variable. Assign it a list that starts with `0`, followed by `amount` copies of `float('inf')`. You can do that by concatenating `[0]` with `[float('inf')] * amount`.

### Seed

```py
def min_coins(coins, amount):
--fcc-editable-region--
    pass
--fcc-editable-region--
```

## Step 3

### Description

To see what your table looks like, return `table` from the function.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount
--fcc-editable-region--

--fcc-editable-region--
```

## Step 4

### Description

Now, call the `min_coins` function with `[1, 3, 4]` as the coins and `6` as the amount, and print the result.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount
    return table

--fcc-editable-region--

--fcc-editable-region--
```

## Step 5

### Description

You should see `[0, inf, inf, inf, inf, inf, inf]` in the terminal. The table has one slot for each amount from `0` to `6`, and only the slot for `0` is solved.

Since tabulation works bottom-up, you will fill the table one amount at a time, starting from `1` and going up to `amount`. That way, when you solve an amount, all the smaller amounts are already solved.

Before the `return` statement, create a `for` loop that iterates over `range(1, amount + 1)` using `current_amount` as the loop variable. Add the `pass` keyword inside the loop for now.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

--fcc-editable-region--

--fcc-editable-region--

    return table

print(min_coins([1, 3, 4], 6))
```

## Step 6

### Description

To find the minimum number of coins for `current_amount`, you need to try each coin as the last coin added.

Replace the `pass` keyword with a nested `for` loop that iterates over `coins` using `coin` as the loop variable. Add the `pass` keyword inside the nested loop for now.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
--fcc-editable-region--
        pass
--fcc-editable-region--

    return table

print(min_coins([1, 3, 4], 6))
```

## Step 7

### Description

A coin can only be used if it is not bigger than the amount you are trying to make. For example, you can't use a coin of `4` to make an amount of `3`.

Replace the `pass` keyword with an `if` statement that checks if `coin` is less than or equal to `current_amount`. Add the `pass` keyword inside the `if` statement for now.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
        for coin in coins:
--fcc-editable-region--
            pass
--fcc-editable-region--

    return table

print(min_coins([1, 3, 4], 6))
```

## Step 8

### Description

If you use `coin` as the last coin, what is left to make is `current_amount - coin`. That is a smaller amount, so its solution is already stored in `table[current_amount - coin]`.

This means that the number of coins needed to make `current_amount` using `coin` as the last coin is `table[current_amount - coin] + 1`: the minimum number of coins for what is left, plus the coin you just used.

For example, to make `6` using a coin of `3`, you need `table[3] + 1` coins.

Replace the `pass` keyword by assigning `table[current_amount - coin] + 1` to `table[current_amount]`.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
        for coin in coins:
            if coin <= current_amount:
--fcc-editable-region--
                pass
--fcc-editable-region--

    return table

print(min_coins([1, 3, 4], 6))
```

## Step 9

### Description

Now the terminal shows `[0, 1, 2, 1, 1, 2, 3]`. The last value says you need `3` coins to make `6`, but `3 + 3` makes `6` with only `2` coins.

This happens because each coin overwrites the value stored by the previous coin. For `current_amount = 6`, the coin `3` stores `2`, but then the coin `4` overwrites it with `table[2] + 1`, which is `3`.

You need to keep the smallest value instead. Update the assignment so that `table[current_amount]` is set to the minimum between its current value and `table[current_amount - coin] + 1`. You can use the built-in `min()` function for that.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
        for coin in coins:
            if coin <= current_amount:
--fcc-editable-region--
                table[current_amount] = table[current_amount - coin] + 1
--fcc-editable-region--

    return table

print(min_coins([1, 3, 4], 6))
```

## Step 10

### Description

The terminal now shows `[0, 1, 2, 1, 1, 2, 2]`, and every value is the correct minimum. For example, `table[4]` is `1` because you can use a single coin of `4`, and `table[6]` is `2` because of `3 + 3`.

The function should return only the answer for the target amount, not the whole table.

Update the `return` statement to return `table[amount]`.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
        for coin in coins:
            if coin <= current_amount:
                table[current_amount] = min(
                    table[current_amount], table[current_amount - coin] + 1
                )

--fcc-editable-region--
    return table
--fcc-editable-region--

print(min_coins([1, 3, 4], 6))
```

## Step 11

### Description

Now try your function with a real set of coins.

Above the existing `print()` call, call `min_coins` with `[1, 5, 10, 25]` as the coins and `63` as the amount, and print the result.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
        for coin in coins:
            if coin <= current_amount:
                table[current_amount] = min(
                    table[current_amount], table[current_amount - coin] + 1
                )

    return table[amount]

--fcc-editable-region--

--fcc-editable-region--
print(min_coins([1, 3, 4], 6))
```

## Step 12

### Description

You should see `6` in the terminal, because `25 + 25 + 10 + 1 + 1 + 1` makes `63`.

Sometimes, an amount can't be made with the given coins. Below the existing `print()` calls, call `min_coins` with `[2]` as the coins and `3` as the amount, and print the result.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
        for coin in coins:
            if coin <= current_amount:
                table[current_amount] = min(
                    table[current_amount], table[current_amount - coin] + 1
                )

    return table[amount]

print(min_coins([1, 5, 10, 25], 63))
print(min_coins([1, 3, 4], 6))
--fcc-editable-region--

--fcc-editable-region--
```

## Step 13

### Description

The last call prints `inf`. With only coins of `2`, you can't make `3`, so `table[3]` is never updated and keeps its placeholder value.

Instead of `inf`, the function should return `-1` to indicate that the amount can't be made.

Update the `return` statement to return `table[amount]` if it is not equal to `float('inf')`, and `-1` otherwise. You can do that in a single line with a conditional expression.

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
        for coin in coins:
            if coin <= current_amount:
                table[current_amount] = min(
                    table[current_amount], table[current_amount - coin] + 1
                )

--fcc-editable-region--
    return table[amount]
--fcc-editable-region--

print(min_coins([1, 5, 10, 25], 63))
print(min_coins([1, 3, 4], 6))
print(min_coins([2], 3))
```

## Step 14

### Description

Finally, check what happens with an amount of `0`.

Below the existing `print()` calls, call `min_coins` with `[1, 2, 5]` as the coins and `0` as the amount, and print the result.

You should see `0` in the terminal. Since the outer loop doesn't run when `amount` is `0`, the function returns `table[0]`, which is the base case you set at the start.

With that, your coin change calculator workshop is complete!

### Seed

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
        for coin in coins:
            if coin <= current_amount:
                table[current_amount] = min(
                    table[current_amount], table[current_amount - coin] + 1
                )

    return table[amount] if table[amount] != float('inf') else -1

print(min_coins([1, 5, 10, 25], 63))
print(min_coins([1, 3, 4], 6))
print(min_coins([2], 3))
--fcc-editable-region--

--fcc-editable-region--
```

## Solution

```py
def min_coins(coins, amount):
    table = [0] + [float('inf')] * amount

    for current_amount in range(1, amount + 1):
        for coin in coins:
            if coin <= current_amount:
                table[current_amount] = min(
                    table[current_amount], table[current_amount - coin] + 1
                )

    return table[amount] if table[amount] != float('inf') else -1

print(min_coins([1, 5, 10, 25], 63))
print(min_coins([1, 3, 4], 6))
print(min_coins([2], 3))
print(min_coins([1, 2, 5], 0))
```
