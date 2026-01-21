# Summary

In this lab, you will restore a coherent narrative from shuffled, duplicated, or missing story fragments.

You'll work with arrays containing story fragment objects. Each fragment object has the following properties:

| Property | Description | Example value |
|-|-|-|
| `id` | A positive integer indicating the fragment's position in the story | `3` | 
| `text` | The actual story content | `"and I use Arch btw"` |

Here is an example of an array containing story fragments: 

```
exampleArray = [
{ id: 3, text: "\"and I use Arch btw.\"" }, 
, 
{ id: 1, text: "Naomi said:" }, 
{ id: 3, text: "\"and I use Arch btw.\"" },
]
```

After restoring the story from `exampleArray`, it would look like this:

```
Naomi said:
[...]
and I use Arch btw."
```

In this lab, you are provided with a prefilled array called `shuffledFragments`.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

# User Stories

1. You should create a function named `compactFragments` that takes an array of fragments, returns a new array with all undefined elements removed, and logs a warning to the console for each undefined element. Each warning logged by `compactFragments` should start with the prefix `[UNDEFINED_ELEMENT]`.
2. You should declare a variable named `compactedShuffledFragments` and assign it the result of calling `compactFragments` with the `shuffeldFragments` array.
3. You should create a function named `sortFragments` that takes an array of fragments as input and returns a new array sorted by the `id` property in ascending order. You should implement your own sorting algorithm without using JavaScript's built-in `sort` method.
4. You should declare a variable named `stortedFragments` and assign it the result of calling `sortFragments` with the `compactedShuffledFragments` array.
5. You should create a function named `validateFragments` that accepts a sorted array of fragments. This function should log a warning for each duplicate `id`, when two or more fragments share the same `id`, and for each missing `id`, when there are gaps in the sequence between the lowest and highest `id`. The warnings should begin with the appropriate prefix: `[DUPLICATE_ID]` and `[MISSING_ID]`.
6. You should call `validateFragments` with the `sortedFragments` array.
7. You should create a function named `patchFragments` that takes a sorted array of fragments as input and returns a new array with duplicate fragments removed (keep only the first occurrence) and missing fragments filled in with placeholder objects. The placeholder format should be `{id: [missing_id], text: "~~~~~~~ Missing story fragment ~~~~~~~"}`.
8. You should declare a variable named `patchedFragments` and assign it the result of calling `patchFragments` with the `sortedFragments` array.
9. You should create a function named `assembleStory` that takes an array of sorted fragments as input and returns a single string with all fragment texts joined by newline characters.
10. You should use `assembleStory` with your `patchedFragments` to display the complete story to the console.
11. Your functions `compactFragments`, `sortFragments`, `validateFragments`, `patchFragments` and `assembleStory` should not mutate the array that they are called with.
