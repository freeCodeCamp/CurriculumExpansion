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

5. Your `runSequence()` function should:

- Log `Switching to [color] for [duration]s` for each valid phase.

- Log `Invalid phase detected` and skip the phase if `duration <= 0`.

- Log `Faulted phase!` and stop the simulation early if `config.fault` is set to `true`.

- Log `No phases found` and immediately `return` if `config.phases` is empty.

6. You should have a function named `generateTimeline` and accept a `config` object as the first parameter and `cycles` as the second parameter.

7. You should record the cumulative elapsed time after each phase and cycles into an array, adding each phase's `duration` to the running total as you iterate.

8. You should return the completed array of cumulative timestamps from `generateTimeline()`.
