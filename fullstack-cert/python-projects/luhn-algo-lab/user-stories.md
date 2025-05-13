The Luhn algorithm, also known as the "modulus 10" or "mod 10" algorithm, is a simple checksum formula used to validate a variety of identification numbers, like credit card numbers. These are the steps to validate a number using the Luhn algorithm:
- Starting from right, and excluding the rightmost digit (the check digit), double the value of every other digit.
- If the result of doubling a digit is greater than `9`, sum the digits to get a single digit. Alternatively, you can subtract `9` from the result.
- Take the sum of all the digits including the check digit.
- If the sum of all the digits is a multiple of `10`, then the number is valid; else it is not valid.

Let's say we have the number `453914880`. The steps to validate it using the Luhn algorithm would be:

```md
Account number       4   5   3   9   1   4   8   8   0   
Double every other       ✔       ✔       ✔       ✔   x 
                     4   10  3   18  1   8   8   16  0  
Sum 2-char digits    4    1  3    9  1   8   8    7  0
Total Sum:           4 + 1 + 3 + 9 + 1 + 8 + 8 + 7 + 0 = 41
```

- Since `41` is not a multiple of `10`, the number is invalid.

In this lab, you will build a credit card validator using the Luhn algorithm.

## User Stories

1. You should define a function named `verify_card_number` that takes a string of digits (representing a card number) as input and returns `True` if the card number is valid according to the Luhn algorithm, and `False` otherwise.

1. You should define a `main` function to demonstrate the use of `verify_card_number`.

1. In the `main` function:
   - You should remove any dashes or spaces from the card number before passing it to `verify_card_number`.
   - If the result is valid, print `VALID!`; otherwise, print `INVALID!`.

When you complete the project, you should see the following messages depending on the values they enter.

| Card Number        | Message   |
| ------------------ | --------- |
| 453914889          | VALID!    |
| 4111-1111-1111-1111| VALID!    |
| 1234 5678 9012 3456| INVALID!  |
