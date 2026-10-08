In this lab, you will solve the 0/1 knapsack problem using dynamic programming. You have a knapsack that can carry a maximum weight, and a set of items, each with a weight and a value. For each item, you can either put it in the knapsack or leave it out: you can't take an item more than once, and you can't take a fraction of it. Your goal is to find the highest total value you can carry, and which items give that value.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `knapsack` with two parameters: `items` and `max_weight`.
1. `items` should be a list of dictionaries, each with the following keys:
   -  `name`: a string with the name of the item.
   -  `weight`: a positive integer representing the weight of the item.
   -  `value`: a positive integer representing the value of the item.
1. `max_weight` should be a non-negative integer representing the maximum total weight the knapsack can carry.
1. `knapsack` should use a dynamic programming approach to find the combination of items with the maximum total value whose total weight doesn't exceed `max_weight`. Each item can be used at most once.
1. `knapsack` should return a tuple with two elements:
   -  the maximum total value.
   -  a list with the names of the items in that combination, in the same order they appear in `items`.
1. If no item fits in the knapsack, `knapsack` should return `(0, [])`.

## Usage example

```py
gear = [
    {'name': 'map', 'weight': 1, 'value': 15},
    {'name': 'compass', 'weight': 1, 'value': 10},
    {'name': 'water', 'weight': 4, 'value': 40},
    {'name': 'tent', 'weight': 8, 'value': 60},
    {'name': 'food', 'weight': 5, 'value': 45},
    {'name': 'camera', 'weight': 3, 'value': 22},
]

print(knapsack(gear, 10))
print(knapsack(gear, 0))
```

That code should print:

```bash
(100, ['map', 'water', 'food'])
(0, [])
```
