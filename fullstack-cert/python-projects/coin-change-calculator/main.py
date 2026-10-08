def min_coins(coins, amount):
    # table[i] holds the minimum number of coins needed to make the amount i
    table = [0] + [float('inf')] * amount

    # Build the solution bottom-up, from 1 to the target amount
    for current_amount in range(1, amount + 1):
        for coin in coins:
            if coin <= current_amount:
                table[current_amount] = min(
                    table[current_amount], table[current_amount - coin] + 1
                )

    # If the amount is still unreachable, no combination of coins works
    return table[amount] if table[amount] != float('inf') else -1

print(min_coins([1, 5, 10, 25], 63))
# Output: 6

print(min_coins([1, 3, 4], 6))
# Output: 2

print(min_coins([2], 3))
# Output: -1

print(min_coins([1, 2, 5], 0))
# Output: 0

