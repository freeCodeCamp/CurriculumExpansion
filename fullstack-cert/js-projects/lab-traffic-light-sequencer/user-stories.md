# Summary

In this lab, you will simulate configurable traffic light cycles and log anomalies.

You'll work with config objects that describe the phases of a traffic light. Each config object has the following properties:

- `fault`: a boolean flag that triggers early termination when `true`.
- `phases`: an array of phase objects.

Each phase object inside `phases` has the following properties:

- `color`: a string representing the light color (`"green"`, `"yellow"`, or `"red"`).
- `duration`: a positive integer representing how long the phase lasts in seconds.

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

1. You should have a function named `runSequence` with two parameters: `config` and `cycles`, where `config` represents a config object and `cycles` represents the maximum number of times the sequence can run before stopping.

1. You should implement `runSequence(config, cycles)` using a `for` or `while` loop to iterate through each phase across the given number of cycles.

1. The `runSequence` function should:
  - Log `Switching to [color] for [duration] s` for each valid phase. Replace `[color]` and `[duration]` with the corresponding properties of the phase object.
  - Log `Invalid phase detected` and skip the phase if `duration <= 0`.
  - Log `Faulted phase!` and stop the simulation early if `config.fault` is set to `true`.
  - Log `No phases found` and immediately return if `config.phases` is empty.
  - For example, `runSequence(exampleConfig, 1)` should log:

  ```md
  Switching to green for 5 s
  Switching to yellow for 2 s
  Switching to red for 4 s
  ```

1. You should have a function named `generateTimeline` with two parameters: `config` and `cycles`.

1. The `generateTimeline` function should:
  - Record the cumulative elapsed time after each phase across the cycles into an array, adding each phase's `duration` to the running total as you iterate.
  - Return the array of cumulative timestamps.
  - For example, `generateTimeline(exampleConfig, 1)` should return the array `[5, 7, 11]`.
