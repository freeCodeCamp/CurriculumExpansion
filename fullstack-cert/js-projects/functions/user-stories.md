1. You should create an arrow function named `generatePassword`. The function should have a `length` parameter. Step 2 to 5 should be created within the `generatePassword` function.

2. Using the `let` keyword, create a variable named `chars`. It should have a value of all possible characters that can be included in the password: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()`.

3. You should create a variable named `password`. It should have an empty string as its value.

4. You should create a `for` loop that runs `length` times. In the body of the loop:
    - Generate a random index using `Math.floor(Math.random() * chars.length);` and store it in a variable named `randomIndex`
    - Append the random characters to `password` using `chars[randomIndex]`.

5. You should return `password`.

6. You should create an arrow function named `runPasswordGenerator`. Step 7 to 9 should be created within the `runPasswordGenerator` function.

7. You should create a prompt that asks the user to `Enter the desired length for the password:`. Store the input in a `const` variable named `length`, and convert it to an integer.

8. You should call the `generatePassword` function with `length` as a parameter and store the returned password in a `const` variable named `password`.

9. You should log the generated password to the console using the message `Generated password: ${password}`.

10. You should call the `runPasswordGenerator` function.