1. You should define a function named `caesar_cipher` that takes three parameters: `text`, `shift`, and `encrypt`, with `encrypt` set to `True` by default.
2. You should define a variable `alphabet` that stores all lowercase letters from `a` to `z` as a string.
3. You should have an `if` statement that checks if `encrypt` is `False` and, if so, set `shift` to the negative value of `shift`.
4. Create a variable named `shifted_alphabet` that stores the alphabet shifted by the given `shift` value.
5. You should initialize an empty string variable named `result` to store the encrypted or decrypted text.
6. You should use a `for` loop to iterate over each character in `text`.
7. Inside the loop:

   - Using an `if` statement, check if `char.lower()` is in the `alphabet`.
   - Check if `char` is uppercase and store the result in a variable named `is_upper`.
   - Create a new variable named `new_char` and assign it the shifted character using `shifted_alphabet[alphabet.index(char.lower())]`.
   - If `is_upper` is `True`, convert `new_char` to uppercase before adding it to `result`. Otherwise, add `new_char` as is.
   - Otherwise, If the character is not in `alphabet`, add it to `result` unchanged.

8. You should return `result` at the end of the function.
9. You should prompt the user with `Do you want to (E)ncrypt or (D)ecrypt?` and store the input in a variable named `choice`.
10. You should convert `choice` to lowercase and remove extra spaces using `.strip().lower()`.
11. Using an `if` statement, check if `choice` is either `e` or `d`, otherwise print `"Invalid choice. Please enter 'E' for encryption or 'D' for decryption".`.
12. If the input is valid, prompt the user to `"Enter your message:"` and store the input in a variable named `text`.
13. You should prompt the user to enter the shift value with `"Enter the shift value (1-25):"` and store it as an integer in a variable named `shift`.
14. You should assign `encrypt = choice == 'e'`.
15. Call the `caesar_cipher` function with the `text`, `shift`, and `encrypt` as arguments, and store the result in a variable named `result`.
16. Print the value of `result`.
