expenses = []

def add_expense(amount, category):
    expenses.append({"amount": amount, "category": category})

def print_expenses(expenses):
    for expense in expenses:
        print(f"Amount: {expense['amount']}, Category: {expense['category']}")

def total_expenses():
    return sum(map(lambda expense: expense['amount'], expenses))

def filter_expenses_by_category(category):
    return filter(lambda expense: expense['category'] == category, expenses)

def main():
    while True:
        print("\nExpense Tracker")
        print("1. Add an expense")
        print("2. List all expenses")
        print("3. Show total expenses")
        print("4. Filter expenses by category")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            amount = float(input("Enter amount: "))
            category = input("Enter category: ")
            add_expense(amount, category)

        elif choice == '2':
            print("\nAll Expenses:")
            print_expenses(expenses)

        elif choice == '3':
            print("\nTotal Expenses: ", total_expenses())

        elif choice == '4':
            category = input("Enter category to filter: ")
            print(f"\nExpenses for {category}:")
            expenses_from_category = filter_expenses_by_category(category)
            print_expenses(expenses_from_category)

        elif choice == '5':
            print("Exiting the program.")
            break

        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
