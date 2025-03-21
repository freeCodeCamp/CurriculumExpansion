def is_valid_number(value):
    return value.replace('.', '', 1).isdigit() 

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error! Division by zero."
    return a / b

print("Simple Calculator")

while True:
    print("\nSelect operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("Enter 'q' to quit.")

    choice = input("Enter choice (1/2/3/4): ").strip()

    if choice.lower() == 'q':
        print("Exiting calculator. Goodbye!")
        break

    if choice not in ('1', '2', '3', '4'):
        print("Invalid input. Please enter a number between 1 and 4.")
        continue

    num1 = input("Enter first number: ").strip()
    num2 = input("Enter second number: ").strip()

    if not (is_valid_number(num1) and is_valid_number(num2)):
        print("Invalid input. Please enter numeric values.")
        continue

    num1, num2 = float(num1), float(num2)

    if choice == '1':
        print(f"Result: {add(num1, num2)}")
    elif choice == '2':
        print(f"Result: {subtract(num1, num2)}")
    elif choice == '3':
        print(f"Result: {multiply(num1, num2)}")
    elif choice == '4':
        print(f"Result: {divide(num1, num2)}")
