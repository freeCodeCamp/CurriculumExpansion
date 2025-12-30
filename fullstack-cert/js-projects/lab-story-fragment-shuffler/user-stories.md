# Summary

In this lab, you will restore a coherent narrative from shuffled, duplicated, or missing story fragments. 

You'll work with a pre-filled array called `shuffledFragments` containing story fragment objects. Each fragment object has the following properties:

- `id`: A positive integer indicating the fragment's position in the story
- `text`: The actual story content

# User Stories

1. Create a function named `compactFragments` that takes an array of fragments as input, returns a new array with all undefined elements removed and logs a warning to the console for each undefined element found.
2. Create a variable named `compactedShuffledFragments` and assign it the result of calling `compactFragments` with the `shuffeldFragments` array.
3. Create a function named `sortFragments` that takes an array of fragments as input and returns a new array sorted by the `id` property in ascending order. Implement your own sorting algorithm without using JavaScript's built-in `sort` method.
4. Create a variable named `stortedFragments` and assign it the result of calling `sortFragments` with the `compactedShuffledFragments` array.
5. Create a function named `validateFragments` that takes a sorted array of fragments as input and logs warnings for duplicate IDs (When two or more fragments have the same `id`) and missing IDs (When there are gaps in the sequence).
6. Call `validateFragments` with the `sortedFragments` array.
7. Create a function named `patchFragments` that takes a sorted array of fragments as input and returns a new array with duplicate fragments removed (keep only the first occurrence) and missing fragments filled in with placeholder objects. The placeholder format should be `{id: [missing_id], text: "~~~~~~~ Missing story fragment ~~~~~~~"}`.
8. Create a variable named `patchedFragments` and assign it the result of calling `patchFragments` with the `sortedFragments` array.
9. Create a function named `assembleStory` that takes an array of sorted fragments as input and returns a single string with all fragment texts joined by newline characters.
10. Use `assembleStory` with your `patchedFragments` to display the complete story to the console.
