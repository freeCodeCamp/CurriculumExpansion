1. You should create a function named `permuteString`.
1. The function should take two arguments, `str` and an optional argument `prefix` set to an empty string.
1. You should check if the length of the `str` is equal to 0, if it is the function should return the value of `prefix`.
1. You should create a for loop to iterate over the `str` argument.
1. On each iteration, you should remove the current character from the `str` argument and add it to the `prefix` argument and call the `permuteString` function recursively with the updated `str` and `prefix` arguments.
