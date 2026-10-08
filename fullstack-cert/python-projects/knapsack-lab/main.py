def knapsack(items, max_weight):
    item_count = len(items)

    # table[i][w] holds the best value using the first i items with a weight limit of w
    table = [[0] * (max_weight + 1) for _ in range(item_count + 1)]

    # Build the solution bottom-up, one item at a time
    for i in range(1, item_count + 1):
        item = items[i - 1]
        for current_weight in range(max_weight + 1):
            # Option 1: leave the current item out
            table[i][current_weight] = table[i - 1][current_weight]
            # Option 2: put the current item in, if it fits
            if item['weight'] <= current_weight:
                table[i][current_weight] = max(
                    table[i][current_weight],
                    table[i - 1][current_weight - item['weight']] + item['value']
                )

    # Walk back through the table to find which items were put in
    selected = []
    current_weight = max_weight
    for i in range(item_count, 0, -1):
        # If the value changed from the previous row, the item was put in
        if table[i][current_weight] != table[i - 1][current_weight]:
            selected.append(items[i - 1]['name'])
            current_weight -= items[i - 1]['weight']

    # The walk back finds the items from last to first
    selected.reverse()

    return table[item_count][max_weight], selected

gear = [
    {'name': 'map', 'weight': 1, 'value': 15},
    {'name': 'compass', 'weight': 1, 'value': 10},
    {'name': 'water', 'weight': 4, 'value': 40},
    {'name': 'tent', 'weight': 8, 'value': 60},
    {'name': 'food', 'weight': 5, 'value': 45},
    {'name': 'camera', 'weight': 3, 'value': 22},
]

print(knapsack(gear, 10))
# Output: (100, ['map', 'water', 'food'])

print(knapsack(gear, 15))
# Output: (132, ['map', 'compass', 'water', 'food', 'camera'])

print(knapsack(gear, 20))
# Output: (170, ['map', 'compass', 'water', 'tent', 'food'])

print(knapsack(gear, 0))
# Output: (0, [])

electronics = [
    {'name': 'tablet', 'weight': 10, 'value': 60},
    {'name': 'laptop', 'weight': 20, 'value': 100},
    {'name': 'monitor', 'weight': 30, 'value': 120},
]

print(knapsack(electronics, 50))
# Output: (220, ['laptop', 'monitor'])

print(knapsack(electronics, 9))
# Output: (0, [])
