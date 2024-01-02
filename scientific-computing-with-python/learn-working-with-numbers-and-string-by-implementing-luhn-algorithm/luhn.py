"""
Luhn Algorithm
https://en.wikipedia.org/wiki/Luhn_algorithm

The Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, named after its creator,
IBM scientist Hans Peter Luhn, is a simple check digit formula used to validate a variety of identification numbers.

1. Take a card number from the user and remove any spaces or dashes from that.
2. Double every second digit starting from right to left.
		2.1 If the result is a two-digit number, add them to get a single-digit number.
3. Add every second digit starting from the second to the last from right to left.
4. Add the results from the second and the third step together.
5. If the total is divisible by 10, the card number is valid.
"""


def verify_card_number(card_number):
    sum_of_odd_digits = 0
    sum_of_even_digits = 0

    card_number_reversed = card_number[::-1]

    for digit in card_number_reversed[::2]:
        sum_of_odd_digits += int(digit)

    sum_of_even_digits = 0
    for digit in card_number_reversed[1::2]:
        number = int(digit) * 2
        if number >= 10:
            number = (number // 10) + (number % 10)
        sum_of_even_digits += number

    total = sum_of_odd_digits + sum_of_even_digits

    return total % 10 == 0


def main():
    card_number = '4111-1111-4555-1142'

    card_number = card_number.translate(str.maketrans({'-': '', ' ': ''}))

    if verify_card_number(card_number):
        print('VALID!')
    else:
        print('INVALID!')


if __name__ == '__main__':
    main()

