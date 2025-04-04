1. You should create a dictionary named `settings` that stores the following user configuration preferences:

    ```md
        "theme": "light",
        "language": "English",
        "notifications": "enabled"
    ```

2. You should define a function named `add_setting` that takes the `settings` dictionary as a parameter and allows the user to add a new setting.

3. Inside the `add_setting` function, you should:

   - Ask the user to enter a setting name to add using the prompt: `"Enter setting name to add: "`.
   - Check if the setting name already exists in the `settings` dictionary.
     - If the setting exists, print: `"Setting '[key]' already exists! Cannot add a new setting with this name."`
     - If the setting doesn't exist, ask the user to enter a value for the setting and store it in the `settings` dictionary.
     - Print a confirmation message in the format: `"Setting '[key]' added with value '[value]' successfully!"`.

4. You should define a function named `update_setting` that takes the `settings` dictionary as a parameter and allows the user to update an existing setting.

5. Inside the `update_setting` function, you should:

   - Ask the user to enter the setting name to update using the prompt: `"Enter setting name to update: "`.
   - Check if the setting exists in the `settings` dictionary.
     - If the setting exists, ask the user for a new value using the prompt: `"Enter new value for [key]: "`.
     - Update the setting in the `settings` dictionary and print a confirmation message: `"Setting '[key]' updated to '[value]' successfully!"`.
     - If the setting does not exist, print: `"Setting '[key]' does not exist! Cannot update a non-existing setting."`.

6. You should define a function named `delete_setting` that takes the `settings` dictionary as a parameter and allows the user to delete a specific setting.

7. Inside the `delete_setting` function, you should:

   - Ask the user to enter the setting name to delete using the prompt: `"Enter setting name to delete: "`.
   - Check if the setting exists in the `settings` dictionary.
     - If the setting exists, remove the key-value pair from the dictionary and print: `"Setting '[key]' deleted successfully!"`.
     - If the setting does not exist, print: `"Setting not found!"`.

8. You should define a function named `view_settings` that that takes the `settings` dictionary as a parameter and displays all current settings.

9. Inside the `view_settings` function, you should:

   - Check if the `settings` dictionary contains values.
   - If the dictionary is empty, print: `"No settings available."`
   - If the dictionary contains settings, display them in the following format:

    ```md
    Current User Settings:
    Theme: light
    Language: English
    Notifications: enabled
    ```

10. You should define a function named `main` that provides an interactive menu for users to manage their settings.

11. Inside the `main` function, you should:

   - Display the following menu: 

    ```md    
    User Configuration Settings Manager
    1. Add a New Setting
    2. Update a Setting
    3. Delete a Setting
    4. View Settings
    5. Exit
    ```

   - Prompt the user to select an option.  
   - Call the appropriate function based on the user's input.  
   - If the user enters an invalid choice, print: `"Invalid choice! Please select a valid option."`.
   - Continue displaying the menu until the user selects `"5"` to exit.
   - Once the user exits, print `"Exiting the program."`.

12. You should call the `main` function to start the program and allow the user to manage their settings interactively.
