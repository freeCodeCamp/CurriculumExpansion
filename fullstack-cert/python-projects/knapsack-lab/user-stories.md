In this lab, you will solve the unbounded knapsack problem using dynamic programming. You have a knapsack that can carry a maximum weight, and a set of items, each with a weight and a value. There is an unlimited supply of each item, so you can put the same item in the knapsack more than once, but you can't take a fraction of it. Your goal is to find the highest total value you can carry, and how many of each item give that value.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `knapsack` with two parameters: `items` and `max_weight`.
1. `items` should be a list of dictionaries, each with the following keys:
   -  `name`: a string with the name of the item.
   -  `weight`: a positive integer representing the weight of one unit of the item.
   -  `value`: a positive integer representing the value of one unit of the item.
1. `max_weight` should be a non-negative integer representing the maximum total weight the knapsack can carry.
1. `knapsack` should use a dynamic programming approach to find the combination of items with the maximum total value whose total weight doesn't exceed `max_weight`. Each item can be used any number of times.
1. `knapsack` should return a tuple with two elements:
   -  the maximum total value.
   -  a dictionary where each key is the name of an item in that combination, and each value is how many units of that item are in the combination. Items that are not used should not be included.
1. If no item fits in the knapsack, `knapsack` should return `(0, {})`.

## Usage example

```py
gear = [
    {'name': 'water', 'weight': 3, 'value': 40},
    {'name': 'food', 'weight': 4, 'value': 55},
    {'name': 'tent', 'weight': 9, 'value': 130},
    {'name': 'rope', 'weight': 2, 'value': 25},
]

print(knapsack(gear, 8))
print(knapsack(gear, 14))
print(knapsack(gear, 1))
```

That code should print:

```bash
(110, {'food': 2})
(195, {'water': 1, 'tent': 1, 'rope': 1})
(0, {})
```
