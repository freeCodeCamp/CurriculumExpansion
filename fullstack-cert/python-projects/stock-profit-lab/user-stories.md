In this lab, you will find the best profit you can make from a single stock trade. You are given the price of a stock on each day, and you can buy one share on one day and sell it on a later day. Your goal is to find the highest profit you can make, which is the selling price minus the buying price.

For example, with the prices `[7, 1, 5, 3, 6, 4]`, the best trade is to buy on day `1` at a price of `1` and sell on day `4` at a price of `6`, for a profit of `5`. You can't buy at `1` and sell at `7`, because the price of `7` comes before the price of `1`.

The list may be very long, so your solution should be efficient. Comparing every possible pair of buying and selling days would take quadratic time, `O(n²)`. Instead, find a way to go through the list only once, so that your solution runs in linear time, `O(n)`.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `max_profit` with one parameter: `prices`, a list of positive integers where each element is the price of the stock on that day.
1. `max_profit` should return the highest profit that can be made by buying on one day and selling on a later day.
1. If no trade makes a profit, or `prices` has fewer than two elements, `max_profit` should return `0`.
1. `max_profit` should not modify `prices`.
1. `max_profit` should run in linear time, `O(n)`, where `n` is the length of `prices`.

**Note:** Instead of checking every pair of days, try keeping track of the lowest price you have seen so far as you go through the list, and work out the profit of selling on the current day.

## Usage example

```py
print(max_profit([7, 1, 5, 3, 6, 4]))
print(max_profit([2, 4, 1, 9]))
print(max_profit([9, 7, 4, 3, 1]))
print(max_profit([]))
```

That code should print:

```bash
5
8
0
0
```
