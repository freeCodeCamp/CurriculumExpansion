1. You should create a function named `permuteString`.
1. The `permuteString` function should take three parameters, `str` which is the string to be permuted, an optional parameter `prefix` which defaults to an empty string and an empty array named `result`.
1. You should check if the length of the `str` is 0, if it is, you should push the `prefix` value to the `result` array and return the `result` array.
1. You should create a for loop to iterate over each character in the `str` aganist the `str` length and increment the index by 1.
1. You should create a new string named `rem` which is the concatenation of the substring of `str` from the beginning up to, but not including, the current index, and the substring of `str` from the character right after the current index to the end.
1. You should recursively call the `permuteString` function with the `rem` string as the first argument, the concatenation of the `prefix` and the character at the current index as the second argument, and the `result` array as the third argument.
1. You should return the `result` array.
