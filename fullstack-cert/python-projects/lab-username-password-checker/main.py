settings = {
    "theme": "light",
    "language": "English",
    "notifications": "enabled"
}

def set_setting():
    key = input("Enter setting name (e.g., theme, language, notifications): ").lower()
    value = input(f"Enter value for {key}: ")
    settings[key] = value
    print(f"Setting '{key}' updated to '{value}' successfully!")

def view_settings():
    if not settings:
        print("No settings available.")
    else:
        print("\nCurrent User Settings:")
        for key, value in settings.items():
            print(f"{key.capitalize()}: {value}")
        print()

def update_setting():
    key = input("Enter the setting name to update: ").lower()
    if key in settings:
        value = input(f"Enter new value for {key}: ")
        settings[key] = value
        print(f"Setting '{key}' updated to '{value}' successfully!")
    else:
        print("Setting not found! Please add it first.")

def delete_setting():
    key = input("Enter the setting name to delete/reset: ").lower()
    if key in settings:
        del settings[key]
        print(f"Setting '{key}' deleted successfully!")
    else:
        print("Setting not found!")

def main():
    while True:
        print("\nUser Configuration Settings Manager")
        print("1. Set/Add a Setting")
        print("2. View Settings")
        print("3. Update a Setting")
        print("4. Delete a Setting")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            set_setting()
        elif choice == "2":
            view_settings()
        elif choice == "3":
            update_setting()
        elif choice == "4":
            delete_setting()
        elif choice == "5":
            print("Exiting the program.")
            break
        else:
            print("Invalid choice! Please select a valid option.")

main()
