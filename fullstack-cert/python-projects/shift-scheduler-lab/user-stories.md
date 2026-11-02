In this lab, you will plan which shifts to work to earn as much as possible, using dynamic programming. You are given a list with the pay for each day's shift. You can work any shift you like, but you need to rest after each shift, so you can't work two days in a row. Your goal is to find the highest total pay you can earn, and which days to work to earn it.

For example, with the pay `[60, 150, 40, 30, 200, 70]`, working every other day earns either `60 + 40 + 200`, which is `300`, or `150 + 30 + 70`, which is `250`. But the best plan is to work days `1` and `4`, and rest on both days `2` and `3`, which earns `150 + 200`, which is `350`. Sometimes, resting for more than one day in a row pays more.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `max_earnings` with one parameter: `pay`, a list of positive integers where each element is the pay for that day's shift.
1. `max_earnings` should use a dynamic programming approach to find the highest total pay that can be earned without working two days in a row.
1. `max_earnings` should return a tuple with two elements:
   - the highest total pay.
   - a list of the indices of the days to work to earn that pay, in ascending order. If more than one set of days earns the highest pay, any of them can be returned.
1. If `pay` is empty, `max_earnings` should return `(0, [])`.
1. `max_earnings` should not modify `pay`.

**Note:** For each day, there are only two choices: skip it, and keep the best total up to the day before, or work it, and add its pay to the best total up to two days before. Store the best total for each day so you don't have to work it out again.

## Usage example

```py
print(max_earnings([60, 150, 40, 30, 200, 70]))
print(max_earnings([80, 120, 90, 60, 150]))
print(max_earnings([70, 90]))
print(max_earnings([]))
```

That code should print:

```bash
(350, [1, 4])
(320, [0, 2, 4])
(90, [1])
(0, [])
```
