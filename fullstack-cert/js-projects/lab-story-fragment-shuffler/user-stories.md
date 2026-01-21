# Summary

In this lab, you will restore a coherent narrative from shuffled, duplicated, or missing story fragments.

You'll work with arrays containing story fragment objects. Each fragment object has the following properties:

| Property | Description | Example value |
|-|-|-|
| `id` | A positive integer indicating the fragment's position in the story | `3` | 
| `text` | The actual story content | `"and I use Arch btw.\""` |

Here is an example of an array containing story fragments: 

```
exampleArray = [
{ id: 3, text: "and I use Arch btw.\"" }, 
, 
{ id: 1, text: "Naomi said:" }, 
{ id: 3, text: "and I use Arch btw.\"" },
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

1. You should create a function named `compactFragments` that takes an array of fragments and returns a new array with all undefined elements removed. If the function removes any undefined elements, it should log a message to the console. The message should start with the prefix `[COMPACTED]`.
2. You should declare a variable named `compactedShuffledFragments` and assign it the result of calling `compactFragments` with the `shuffeldFragments` array.
3. You should create a function named `sortFragments` that takes an array of fragments without `undefined` elements and returns a new array sorted by the `id` property in ascending order. You should implement your own sorting algorithm without using JavaScript’s built-in `sort` method.
4. You should declare a variable named `stortedFragments` and assign it the result of calling `sortFragments` with the `compactedShuffledFragments` array.
5. You should create a function named `dedupeFragments` that takes a sorted array of fragments and returns a new array with duplicates removed, keeping only the first occurrence. You should define duplicates as two or more fragments sharing the same `id`. For each `id` that is deduplicated, the function should log a message to the console. The message should start with the prefix `[DEDUPED]`.
6. You should declare a variable named `dedupedFragments` and assign it the result of calling `dedupeFragments` with the `sortedFragments` array.
7. You should create a function named `fillMissingFragments` that takes a sorted array of fragments and returns a new array with missing fragments filled with placeholder objects. You should define missing fragments as gaps in the sequence between the lowest and highest `id`. The placeholder objects should have the format `{ id: missingId, text: "[...]" }`. For each placeholder added, the function should log a message to the console. The message should start with the prefix `[FILLID]`.
8. You should declare a variable named `filledFragments` and assign it the result of calling `fillMissingFragments` with the `dedupedFragments` array.
9. You should create a function named `assembleStory` that takes a sorted array of fragments and returns a single string containing all fragment texts, separated by blank lines.
10. You should use `assembleStory` with your `patchedFragments` to display the complete story in the console.
11. Your functions `compactFragments`, `sortFragments`, `validateFragments`, `patchFragments` and `assembleStory` should not mutate the array that they are called with.
12. You should not change the pre-filled `shuffeldFragments` array.
