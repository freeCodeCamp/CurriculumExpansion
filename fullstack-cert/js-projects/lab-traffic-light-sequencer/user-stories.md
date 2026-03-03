# Summary

In this lab, you will simulate configurable traffic light cycles and log anomalies.

You'll work with a `config` object that describes the phases of a traffic light. Each config object has the following structure:

| Property | Description | Example value |
|-|-|-|
| `fault` | A boolean flag that triggers early termination when `true` | `false` |
| `phases` | An array of phase objects, each with a `color` and `duration` | `[{ color: "green", duration: 5 }]` |

Each phase object inside `phases` has the following properties:

| Property | Description | Example value |
|-|-|-|
| `color` | A string representing the light color | `"red"` |
| `duration` | A positive number representing how long the phase lasts in seconds | `3` |

Here is an example config object:

```js
const exampleConfig = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};
```

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

# User Stories

1. You should have a function named `runSequence`.

2. You should accept a `config` object as the first parameter to `runSequence()`. The `config` object contains a `fault` property and a `phases` array, where each phase has a `color` and a `duration` property.

3. You should accept `cycles` as the second parameter to `runSequence()`.

4. You should implement `runSequence(config, cycles)` using a `for` or `while` loop to iterate through each phase across the given number of cycles.

5. You should log `"Switching to [color] for [duration]s"` to the console during each valid phase, where `[color]` and `[duration]` are the values from the current phase object.

6. You should detect durations less than equal to `0` within the phases and log `"Invalid phase detected"` and skip to the next phase using `continue`.

7. You should stop the entire simulation early if `config.fault` is set to `true` and use `break` to exit the outer loop.

8. You should handle the case where `config.phases` is empty by logging `"No phases found"` and `return` from `runSequence()`.

9. You should have a function named `generateTimeline`.

10. You should accept a `config` object as the first parameter and `cycles` as the second parameter to `generateTimeline()`.

11. You should record the cumulative elapsed time after each phase and cycles into an array, adding each phase's `duration` to the running total as you iterate.

12. You should return the completed array of cumulative timestamps from `generateTimeline()`.

13. You should not make changes in the `config1`, `config2`, `config3`, and `config4` objects.

14. `runSequence(config1, 1)` should log `Switching to green for 5s`, `Switching to yellow for 2s`, `Switching to red for 4s` in order.

15. `runSequence(config1, 2)` should log `Switching to green for 5s`, `Switching to yellow for 2s`, `Switching to red for 4s`, `Switching to green for 5s`, `Switching to yellow for 2s`, `Switching to red for 4s` in order.

16. `runSequence(config2, 1)` should log `Switching to red for 3s`, `Invalid phase detected`, `Switching to green for 6s` in order.

17. `runSequence(config3, 3)` should log `Faulted phase!`.

18. `runSequence(config4, 5)` should log `No phase found`.

19. `generateTimeline(config1, 1)` should return `[5, 7, 11]`.

20. `generateTimeline(config1, 2)` should return `[5, 7, 11, 16, 18, 22]`.

21. `generateTimeline(config2, 2)` should return `[3, 1, 7, 10, 8, 14]`.

22. `generateTimeline(config3, 1)` should return `[5, 7, 13]`.

23. `generateTimeline(config4, 1)` should return `[]`.
