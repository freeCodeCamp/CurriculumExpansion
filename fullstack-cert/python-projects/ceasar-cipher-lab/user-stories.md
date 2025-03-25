1. You should import the `string` module at the beginning of your program.
2. You should define a function named `caesar_cipher` that takes three parameters: `text`, `shift`, and `encrypt`, with `encrypt` set to `True` by default.
3. Inside `caesar_cipher` function, define a variable named `alphabet` and assign it the value of `string.ascii_lowercase`.
4. You should have an `if` statement that checks if `encrypt` is `False` and, if so, set `shift` to the negative value of `shift`.
5. Create a variable named `shifted_alphabet` that stores the alphabet shifted by the given `shift` value.
6. You should create a `translation_table` variable and assign it the result of `str.maketrans(alphabet + alphabet.upper(), shifted_alphabet + shifted_alphabet.upper())`.
7. Return `text.translate(translation_table)`.
8. You should have an `input` method that prompts the user to enter `E` for encryption or `D` for decryption, and store the result in a variable named `choice`. Convert `choice` to lowercase and remove extra spaces using `.strip().lower()`.
9. Using an `if` statement, check if `choice` is neither `e` nor `d`. If so, print an error message and exit the program. Otherwise, determine whether `encrypt` should be `True` (choice == 'e').
10. Prompt the user to enter the text they would like to encrypt or decrypt and assign it to a variable named `text`.
11. You should prompt the user to enter the shift value, convert it to an integer, and assign it to a variable named `shift`.
12. Call the `caesar_cipher` function with the `text`, `shift`, and `encrypt` as arguments, and store the result in a variable named `result`.
13. Print the `result` variable.
