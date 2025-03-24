# --description--

ISBN (International Standard Book Number) is a unique identifier assigned to commercial books. It can be either 10 or 13 digits long, and the last digit is a check digit calculated from the other digits.

Camperbot has tried to build their own ISBN validator. However, they have made a few mistakes along the way.

In this lab, you will fix the existing code and make it function properly.

The user should be able to enter the ISBN code they want to validate in `ISBN,length` format. The ISBN code should not contain hyphens, followed by its length (`10` or `13`), separated by a comma.

Examples:
`1530051126,10` for ISBN-10 codes.
`9781530051120,13` for ISBN-13 codes.

Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should fix the `IndentationError` in the current code.
1. Even if the user does not enter a comma separated value, the program should handle the `IndexError` without crashing.
1. When the user does not enter a comma separated value, they should see the message `Enter comma-separated values.` in the console, and the program should terminate.
1. Even if the user enters a non-numeric value for the length, the program should handle the `ValueError` without crashing.
1. When the user enters a non-numeric value for the length, they should see the message `Length must be a number.` in the console, and the program should terminate.
1. You should fix the `TypeError` in the current code that occurs when the user enters a valid ISBN code.
1. You should fix the `IndexError` in the current code when the user enters a valid ISBN-10 code.
1. Even if the user enters an incorrect ISBN code with characters other than numbers, the program should handle the `ValueError` that occurs without crashing.
1. When the user enters an incorrect ISBN code with characters other than numbers, they should see a message `Invalid character was found.` in the console.
1. You should fix the bug where the `validate_isbn_13()` function always returns `False`, even for valid ISBN-13 codes.

When you complete the project, the user should see the following messages depending on the values they enter.

| ISBN Code | Length | Message |
|-----------|--------|---------|
| Valid | Valid | `Valid ISBN Code.` |
| Invalid Number | Valid | `Invalid ISBN Code.` |
| Does not match specified length or left blank | Valid | `ISBN-10 code should be 10 digits long.` or `ISBN-13 code should be 13 digits long.`, depending on the length they entered. |
| Contains non-numeric characters (except for the check digit) | Valid | `Invalid character was found.` |
| Any | Invalid Number | `Length should be 10 or 13.` |
| Any | Contains non-numeric characters or left blank | `Length must be a number.` |
| Not comma-separated | Not comma-separated | `Enter comma-separated values.` |

You can use the following values to test your code manually if you would like.

Example inputs for valid ISBN-10 codes:
`1530051126,10`
`9971502100,10`
`080442957X,10`

Example inputs for valid ISBN-13 codes:
`9781530051120,13`
`9781947172104,13`



