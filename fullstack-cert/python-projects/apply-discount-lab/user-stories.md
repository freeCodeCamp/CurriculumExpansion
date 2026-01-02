# Apply a Discount

This lab reinforces how to use functions, scope, conditionals, and numeric operations in Python by building a small discount calculator.

1. You should declare a global `price` variable and assign it a positive numeric value (integer or floating point number).

2. You should define a function named `apply_discount`.

3. The `apply_discount` function should take exactly two parameters: `price` and `discount`.

4. If `price` is not a number (`int` or `float`), the function should return the string `The price should be a number`

5. If `discount` is not a number (`int` or `float`), the function should return the string `The discount should be a number`.

6. If `price` is less than or equal to `0`, the function should return the string `The price should greater than 0`.

7. If `discount` is less than `0` or greater than `100`, the function should return the string `The discount should be between 0 and 100`.

8. If both inputs are valid, the function should calculate the discount as a percentage of the price.

9. The function should return the final price after applying the discount.

10. The function should use local variables to calculate the discount amount and final price.

11. The global `price` variable should not be modified by calling the `apply_discount` function.