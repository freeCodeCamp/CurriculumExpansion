## Notes for breaking down workshop into steps

There is already going to be a lecture before this called `What is binary search and how does it differ from linear search? `.

So we don't need a large introduction here for step 1. Just a brief recap of binary search will do.

Here is a link to the original JS challenge
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search

We can reuse parts of that when explaining this workshop.

## Possible break down of steps

Step 1: Have campers define the `binary_search` function with `search_list` and `value` for parameters.
Step 2: Explain to campers that we want to track the path it takes to find the target in the list. Have them create the `path_to_target` variable and initialize it with an empty list.
Step 3: Reminder campers what the low and high pointers are in the binary search algorithm. Then have them create the `low` and `high` variables with the proper values initialized.
Step 4: Explain the reasoning behind the `while` condition and have campers create the `while` loop. Inside the `while` loop, have them write `pass` for now.
Step 5: Explain the reasoning behind the `mid` variable. Then have campers create the `mid` variable inside the `while` loop. They can remove the `pass` here too.
Step 6: Have them create the condition to check if the value is at the mid. If so, they should append the mid value to the path list and return the path list.
Step 7: This might be a good time to have them test their function so far. Something like this: `print(binary_search([1, 2, 3], 2))`.
Step 8: Have them create another condition to check if the value is greater than the mid. If so, they should append the mid value to the path list and update the low pointer to the `mid + 1`. It should probably be good to explain why `mid+1` here too.
Step 9: This might be a good time to have them test their function again. Something like this: `print(binary_search([-5, 0, 5, 10, 15], 10))`.
Step 10: Have them create an `else` clause. Inside the `else` clause, they will append `mid` to the path list and update the high pointer to `mid - 1`.
Step 11: This might be a good time to have them test their function again. Something like this: `print(binary_search([3, 6, 9, 12, 15, 18], 6))`.
Step 12: Have them return `'Value Not Found'` outside of the `while` loop. And that completes the workshop.
