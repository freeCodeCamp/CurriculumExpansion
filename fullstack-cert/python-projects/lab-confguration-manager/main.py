def add_setting(settings):
    key = input("Enter setting name to add: ").lower()
    if key in settings:
        return f"Setting '{key}' already exists! Cannot add a new setting with this name."
    else:
        value = input(f"Enter value for {key}: ")
        settings[key] = value
        return f"Setting '{key}' added with value '{value}' successfully!"

def update_setting(settings):
    key = input("Enter setting name to update: ").lower()
    if key in settings:
        value = input(f"Enter new value for {key}: ")
        settings[key] = value
        return f"Setting '{key}' updated to '{value}' successfully!"
    else:
        return f"Setting '{key}' does not exist! Cannot update a non-existing setting."

def delete_setting(settings):
    key = input("Enter setting name to delete: ").lower()
    if key in settings:
        del settings[key]
        return f"Setting '{key}' deleted successfully!"
    else:
        return "Setting not found!"

def view_settings(settings):
    if not settings:
        return "No settings available."
    else:
        settings_str = "\nCurrent User Settings:\n"
        for key, value in settings.items():
            settings_str += f"{key.capitalize()}: {value}\n"
        return settings_str

def main():
    settings = {
        "theme": "light",
        "language": "English",
        "notifications": "enabled"
    }

    while True:
        print("\nUser Configuration Settings Manager")
        print("1. Add a New Setting")
        print("2. Update a Setting")
        print("3. Delete a Setting")
        print("4. View Settings")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            result = add_setting(settings)
            print(result)
        elif choice == "2":
            result = update_setting(settings)
            print(result)
        elif choice == "3":
            result = delete_setting(settings)
            print(result)
        elif choice == "4":
            result = view_settings(settings)
            print(result)
        elif choice == "5":
            print("Exiting the program.")
            break
        else:
            print("Invalid choice! Please select a valid option.")

main()
