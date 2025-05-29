1. You should print a welcome message `"Number Pattern Generator"`.
2. You should prompt the user to enter a positive number and store the result in a variable named `user_input`.
3. You should define a function named `number_pattern` that takes a single parameter `n` (representing a positive integer).
4. Inside the `number_pattern` function:
   - Use a `for` loop that goes from 1 to `n` (inclusive).
   - In each iteration, create a list of numbers from 1 to the current value of `i`.
   - Convert each number in the list to a string and print them joined by a space.
5. You should check if `user_input` contains only digits using the `isdigit()` method:
   - If it does, convert `user_input` to an integer named `number`.
   - Then check if `number` is greater than 0:
     - If it is, call `number_pattern(number)` to display the pattern.
     - If not, print `"Please enter a number greater than 0."`.
   - If `user_input` is not numeric, print `"Invalid input. Please enter a numeric value."`.
