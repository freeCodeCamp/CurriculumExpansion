print("Simple Calculator")

while True:
    print("\nSelect an operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("Enter 'q' to quit")
    
    choice = input("Enter choice (1/2/3/4): ")
    
    if choice == 'q':
        print("Exiting calculator. Goodbye!")
        break
    
    if choice not in ('1', '2', '3', '4'):
        print("Invalid input. Please try again.")
        continue
    
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("Invalid number. Please enter numeric values.")
        continue
    
    def add(a, b):
        return a + b
    
    def subtract(a, b):
        return a - b
    
    def multiply(a, b):
        return a * b
    
    def divide(a, b):
        if b == 0:
            return "Cannot divide by zero"
        return a / b
    
    if choice == '1':
        print(f"Result: {add(num1, num2)}")
    elif choice == '2':
        print(f"Result: {subtract(num1, num2)}")
    elif choice == '3':
        print(f"Result: {multiply(num1, num2)}")
    elif choice == '4':
        print(f"Result: {divide(num1, num2)}")
