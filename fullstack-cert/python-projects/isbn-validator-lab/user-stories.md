# --description--

ISBN (International Standard Book Number) is a unique identifier assigned to commercial books. It can be either 10 or 13 digits long, and the last digit is a check digit calculated from the other digits.

Camperbot has tried to build their own ISBN validator. However, they have made a few mistakes along the way.

In this lab, you will fix the existing code and make it function properly.

Expected behavior:
When the user runs the program, it will show the prompt `Enter ISBN and length: `. The user can enter the ISBN code they want to validate in `ISBN,length` format. The ISBN code should not contain hyphens, followed by its length (`10` or `13`), separated by a comma.

Example inputs:
`1530051126,10` for ISBN-10 codes.
`9781530051120,13` for ISBN-13 codes.

How to find the check digit:
- You don't have to know the detailed calculation logic in this lab. The functions `calculate_check_digit_10` and `calculate_check_digit_13` will take care of the calculation and return the expected check digit in string.
- The check digit for ISBN-10 codes can be a number from `0` to `9` or an uppercase letter `X`. 
- The check digit for ISBN-13 codes can be a number from `0` to `9`. 

Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should fix the `IndentationError` in the current code.
1. Even if the user does not enter a comma separated value, the program should handle the `IndexError` without crashing.
1. When the user does not enter a comma separated value, they should see the message `Enter comma-separated values.` in the console, and the program should terminate.
1. Even if the user enters a non-numeric value for the length, the program should handle the `ValueError` without crashing.
1. When the user enters a non-numeric value for the length, they should see the message `Length must be a number.` in the console, and the program should terminate.
1. You should fix the `TypeError` in the current code that occurs when the user enters a valid ISBN code.
1. You should fix the `IndexError` in the current code when the user enters a valid ISBN code.
1. Even if the user enters an incorrect ISBN code with characters other than numbers, the program should handle the `ValueError` that occurs without crashing.
1. When the user enters an incorrect ISBN code with characters other than numbers, they should see a message `Invalid character was found.` in the console.
1. When the user enters `1530051126,10`, they should see a message `Valid ISBN Code.`
1. When the user enters `9781530051120,13`, they should see a message `Valid ISBN Code.`

When you complete the project, the user should see the following messages depending on the values they enter.

| ISBN Code | Length | Message | Example input |
|-----------|--------|---------| ------------- |
| Valid | Valid | `Valid ISBN Code.` | `1530051126,10` |
| Invalid Number | Valid | `Invalid ISBN Code.` | `1530051125,10` |
| Does not match specified length or left blank | Valid | `ISBN-10 code should be 10 digits long.` or `ISBN-13 code should be 13 digits long.`, depending on the length they entered. | `9781530051120,10` or `1530051126,13` |
| Contains non-numeric characters (except for the check digit) | Valid | `Invalid character was found.` | `15-0051126,10` |
| Any | Invalid Number | `Length should be 10 or 13.` | `1530051126,9` |
| Any | Contains non-numeric characters or left blank | `Length must be a number.` | `1530051125,A` |
| Not comma-separated | Not comma-separated | `Enter comma-separated values.` | `1530051125` |

You can use the following values to test your code manually if you would like.

Example inputs for valid ISBN-10 codes:
`1530051126,10`
`9971502100,10`
`080442957X,10`

Example inputs for valid ISBN-13 codes:
`9781530051120,13`
`9781947172104,13`
