def max_profit(prices):
    # Track the cheapest price seen so far, so each day only needs to be compared once
    lowest_price = None
    best_profit = 0

    for price in prices:
        if lowest_price is None or price < lowest_price:
            lowest_price = price
        # Selling today after buying at the lowest earlier price
        elif price - lowest_price > best_profit:
            best_profit = price - lowest_price

    return best_profit


print(max_profit([7, 1, 5, 3, 6, 4]))
# Output: 5

print(max_profit([3, 8, 2, 6, 1, 4]))
# Output: 5

print(max_profit([2, 4, 1, 9]))
# Output: 8

print(max_profit([9, 7, 4, 3, 1]))
# Output: 0

print(max_profit([5, 5, 5]))
# Output: 0

print(max_profit([4]))
# Output: 0

print(max_profit([]))
# Output: 0
