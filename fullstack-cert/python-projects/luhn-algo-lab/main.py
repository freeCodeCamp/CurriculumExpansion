def verify_card_number(card_number):
    card_translation = str.maketrans({'-': '', ' ': ''})
    translated_card_number = card_number.translate(card_translation)

    sum_of_odd_digits = 0
    card_number_reversed = translated_card_number[::-1]
    odd_digits = card_number_reversed[::2]

    for digit in odd_digits:
        sum_of_odd_digits += int(digit)

    sum_of_even_digits = 0
    even_digits = card_number_reversed[1::2]
    for digit in even_digits:
        number = int(digit) * 2
        if number >= 10:
            number = (number // 10) + (number % 10)
        sum_of_even_digits += number

    total = sum_of_odd_digits + sum_of_even_digits
    if total % 10 == 0:
        print('VALID!')
    else:
        print('INVALID!')

# Example usage
verify_card_number('4111-1111-4555-1142')
