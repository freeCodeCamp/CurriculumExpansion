# Apply a Discount

This lab reinforces how to use functions, scope, conditionals, and numeric operations in Python by building a small discount calculator.

1. You should define a function named `apply_discount`.

2. The `apply_discount` function should take exactly two parameters: `price` and `discount`.

3. If `price` is not a number (`int` or `float`), the function should return the string `The price should be a number`

4. If `discount` is not a number (`int` or `float`), the function should return the string `The discount should be a number`.

5. If `price` is less than or equal to `0`, the function should return the string `The price should greater than 0`.

6. If `discount` is less than `0` or greater than `100`, the function should return the string `The discount should be between 0 and 100`.

7. If both inputs are valid, the function should calculate the discount as a percentage of the price.

8. The function should return the final price after applying the discount.

9. The function should use local variables to calculate the discount amount and final price.

10. The global `price` variable should not be modified by calling the `apply_discount` function.