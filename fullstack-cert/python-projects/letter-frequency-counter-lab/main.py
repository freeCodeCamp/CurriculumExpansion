print("Number Pattern Generator")
user_input = input("Enter a positive number: ")

def number_pattern(n):
    for i in range(1, n + 1):
        row = list(range(1, i + 1))
        print(" ".join(map(str, row)))

if user_input.isdigit():
    number = int(user_input)
    if number > 0:
        number_pattern(number)
    else:
        print("Please enter a number greater than 0.")
else:
    print("Invalid input. Please enter a numeric value.")
