The Luhn algorithm- also known as the "modulus 10" or "mod 10" algorithm- is a simple checksum formula used to validate a variety of identification numbers, like credit card numbers. These are the steps to validate a number using the Luhn algorithm:
- Set aside the right most digit (the check digit).
- Excluding the last digit, start from the right most digit and double the value of every second digit.
- If the product is greater than `9`, sum the digits of the products to get a single digit. Alternatively, you can subtract `9` from the product.
- Take the sum of all the digits including the check digit.
- If the sum of all the digits is a multiple of `10`, then the number is valid; else it is not valid.

Let's say we have the number `453914880`. The steps to validate it using the Luhn algorithm would be:

```md
Account number       4   5   3   9   1   4   8   8   0   
Double every other       ✔       ✔       ✔       ✔   x 
                     4   10  3   18  1   8   8   16  0  
Sum 2-char digits    4    1  3    9  1   8   8    7  0
Total Sum: 4 + 1 + 3 + 9 + 1 + 8 + 8 + 7 + 0 = 41
```

- Since `41` is not a multiple of `10`, the number is invalid.

In this lab, you will build a credit card validator using the Luhn algorithm.

## User Stories

1. You should define a function named `verify_card_number` to implement the Luhn algorithm for card number validation.

1. The `verify_card_number` function should take a string of digits (representing a card number) as input and return a Boolean value indicating whether the card number is valid according to the Luhn algorithm.

1. To implement the Luhn algorithm within the `verify_card_number` function, you should:
   - Start doubling every second digit from the right (excluding the check digit).
   - If the result is `10` or more, sum the individual digits of the result (or subtract `9`).
   - Sum all the digits together including the check digit.
   - Return `True` if the final result is divisible by `10`; otherwise, return `False`.

1. You should define a `main` function to demonstrate the use of `verify_card_number`.

1. In the `main` function:
   - You should remove any dashes or spaces from the card number before passing it to `verify_card_number`.
   - If the result is valid, print `"VALID!"`; otherwise, print `"INVALID!"`.

When you complete the project, you should see the following messages depending on the values they enter.

| Card Number        | Message   |
| ------------------ | --------- |
| 453914889          | VALID!    |
| 4111-1111-1111-1111| VALID!    |
| 1234 5678 9012 3456| INVALID!  |
