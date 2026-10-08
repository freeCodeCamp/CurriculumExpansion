def knapsack(items, max_weight):
    # table[w] holds the best value that fits in a weight limit of w
    table = [0] * (max_weight + 1)
    # last_item[w] holds the last item put in to reach table[w]
    last_item = [None] * (max_weight + 1)

    # Build the solution bottom-up, from the smallest weight limit to max_weight
    for current_weight in range(1, max_weight + 1):
        # Try each item as the last one put in
        for item in items:
            if item['weight'] <= current_weight:
                value_with_item = table[current_weight - item['weight']] + item['value']
                if value_with_item > table[current_weight]:
                    table[current_weight] = value_with_item
                    last_item[current_weight] = item

    # Walk back from max_weight to count how many of each item were put in
    selected = {}
    current_weight = max_weight
    while last_item[current_weight] is not None:
        item = last_item[current_weight]
        selected[item['name']] = selected.get(item['name'], 0) + 1
        current_weight -= item['weight']

    return table[max_weight], selected

gear = [
    {'name': 'water', 'weight': 3, 'value': 40},
    {'name': 'food', 'weight': 4, 'value': 55},
    {'name': 'tent', 'weight': 9, 'value': 130},
    {'name': 'rope', 'weight': 2, 'value': 25},
]

print(knapsack(gear, 8))
# Output: (110, {'food': 2})

print(knapsack(gear, 14))
# Output: (195, {'water': 1, 'tent': 1, 'rope': 1})

print(knapsack(gear, 17))
# Output: (240, {'food': 2, 'tent': 1})

print(knapsack(gear, 23))
# Output: (325, {'water': 1, 'tent': 2, 'rope': 1})

print(knapsack(gear, 1))
# Output: (0, {})

print(knapsack(gear, 0))
# Output: (0, {})
