1. You should create a function named `permuteString`.
1. The `permuteString` function should take two parameters, `str` which is the string to be permuted, and an optional parameter `prefix` which defaults to an empty string.
1. You should check if the length of the `str` is 0, if it is, the function should return the value of `prefix`.
1. You should create a for loop to iterate over each character in the `str` parameter.
1. On each iteration, you should remove the current character from `str` concatenate it to the `prefix` parameter and call the `permuteString` function recursively with the updated `str` and `prefix` values.
