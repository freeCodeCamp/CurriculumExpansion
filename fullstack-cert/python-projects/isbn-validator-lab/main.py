def validate_isbn_10(isbn):
    if len(isbn) != 10:
        print('ISBN-10 code should be 10 digits long.')
        return

    main_digits = isbn[0:9]
    given_check_digit = isbn[9]

    try:
        main_digits_list = [int(digit) for digit in main_digits]
    except ValueError as e:
        print('Invalid character was found.')
        return

    # Calculate the check digit from other digits
    result = calculate_check_digit_10(main_digits_list)

    # The calculation result can range from 1 to 11.
    # If the result is 11, use 0.
    # If the result is 10, use upper case X.
    # Use the value as it is for other numbers.
    if result == 11:
        expected_check_digit = '0'
    elif result == 10:
        expected_check_digit = 'X'
    else:
        expected_check_digit = str(result)

    # Check if the given check digit matches with the calculated check digit
    if given_check_digit == expected_check_digit:
        print('Valid ISBN Code.')
    else:
        print('Invalid ISBN Code.')


def validate_isbn_13(isbn):
    if len(isbn) != 13:
        print('ISBN-13 code should be 13 digits long.')
        return

    main_digits = isbn[0:12]
    given_check_digit = isbn[12]

    try:
        main_digits_list = [int(digit) for digit in main_digits]
    except ValueError as e:
        print('Invalid character was found.')
        return

    # Calculate the check digit from other digits
    result = calculate_check_digit_13(main_digits_list)

    # The calculation result can range from 1 to 10.
    # If the result is 10, use 0.
    # Use the value as it is for other numbers.
    if result == 10:
        expected_check_digit = '0'
    else:
        expected_check_digit = str(result)

    # Check if the given check digit matches with the calculated check digit
    if given_check_digit == expected_check_digit:
        print('Valid ISBN Code.')
    else:
        print('Invalid ISBN Code.')


def calculate_check_digit_10(main_digits_list):
    # Note: You don't have to fully understand the logic in this function.
    digits_sum = 0
    # Multiply each of the first 9 digits by its corresponding weight (10 to 2) and sum up the results
    for index, digit in enumerate(main_digits_list):
        digits_sum += digit * (10 - index)
    # Find the remainder of dividing the sum by 11, then subtract it from 11
    return 11 - digits_sum % 11


def calculate_check_digit_13(main_digits_list):
    # Note: You don't have to fully understand the logic in this function.
    digits_sum = 0
    # Multiply each of the first 12 digits by 1 and 3 alternately (starting with 1), and sum up the results
    for index, digit in enumerate(main_digits_list):
        if index % 2 == 0:
            digits_sum += digit * 1
        else:
            digits_sum += digit * 3
    # Find the remainder of dividing the sum by 10, then subtract it from 10
    return 10 - digits_sum % 10


def main():
    user_input = input('Enter ISBN and length: ')
    values = user_input.split(',')
    isbn = values[0]

    try:
        length = int(values[1])
    except ValueError as e:
        print('Length must be a number.')
        return
    except IndexError as e:
        print('Enter comma-separated values.')
        return

    if length == 10:
        validate_isbn_10(isbn)
    elif length == 13:
        validate_isbn_13(isbn)
    else:
        print('Length should be 10 or 13.')


main()


''' seed code

def validate_isbn(isbn, length):
    if length == 10:
        return validate_isbn_10(isbn, length)
    elif length == 13:
        return validate_isbn_13(isbn, length)
    else:
        print('Length should be 10 or 13.')
        return False


def validate_isbn_10(isbn):
    if len(isbn) != 10:
        print('ISBN-10 code should be 10 digits long.')
        return False

    main_digits = isbn[0:9]
    given_check_digit = isbn[10]
    digits_sum = 0

    # Calculate the check digit from other digits
    # Multiply each of the first 9 digits by its corresponding weight (10 to 2) and sum up the results
    for index, digit in enumerate(main_digits):
        digits_sum += int(digit) * (10 - index)

    # Find the remainder of dividing the sum by 11, then subtract it from 11
    calculated_check_digit = 11 - digits_sum % 11
    # If the result is 11, use 0 instead
    # If the result is 10, use upper case X instead
    if calculated_check_digit == 11:
        expected_check_digit = '0'
    elif calculated_check_digit == 10:
        expected_check_digit = 'X'
    else:
        expected_check_digit = str(calculated_check_digit)

    return given_check_digit == expected_check_digit


def validate_isbn_13(isbn):
    if len(isbn) != 13:
        print('ISBN-13 code should be 13 digits long.')
        return False

    main_digits = isbn[0:12]
    given_check_digit = isbn[12]
    digits_sum = 0

    # Calculate the check digit from other digits
    # Multiply each of the first 12 digits by 1 and 3 alternately (starting with 1), and sum up the results
    for index, digit in enumerate(main_digits):
        if index % 2 == 0:
            digits_sum += int(digit) * 1
        else:
            digits_sum += int(digit) * 3

    # Find the remainder of dividing the sum by 10, then subtract it from 10
    calculated_check_digit = 10 - digits_sum % 10
    # If the result is 10, use 0 instead
    expected_check_digit = calculated_check_digit % 10

    return given_check_digit == expected_check_digit


def main():
    user_input = input('Enter ISBN and length: ')
    values = user_input.split(',')
    isbn = values[0]

    length = int(values[1])

    if validate_isbn(isbn, length):
    print('Valid ISBN Code.')
    else:
    print('Invalid ISBN Code.')


main()

'''
