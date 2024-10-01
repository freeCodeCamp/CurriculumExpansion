1. You should create a function named `permuteString`.
1. The `permuteString` function should take three parameters, `str`, `prefix` and an empty array named `result`.
1. Check if the length of the string is 0. If it is, push the current prefix to the results and return the results.
1. Implement a loop to iterate over each character in the `str`.
1. In each iteration, remove the current character from the string and call the `permuteString` function recursively with updated arguments to build the remaining permutations.
1. You should return the `result` array.
