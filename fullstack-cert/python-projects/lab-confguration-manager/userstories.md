1. You should create a dictionary named `settings` that stores the following user configuration preferences:

   ```md
       "theme": "light",
       "language": "English",
       "notifications": "enabled"
   ```

2. You should define a function named `add_setting` that takes the `settings` dictionary and a tuple `(key, value)` as parameters to add a new setting.

3. Inside the `add_setting` function, you should:

   - Convert the provided key to lowercase.
   - Check if the setting name already exists in the `settings` dictionary.

     - If the setting exists, return: `"Setting '[key]' already exists! Cannot add a new setting with this name."`
     - If the setting doesn't exist, add the key-value pair to the dictionary.
     - Return a confirmation message in the format: `"Setting '[key]' added with value '[value]' successfully!"`

4. You should define a function named `update_setting` that takes the `settings` dictionary and a tuple `(key_value)` as parameters to update an existing setting.

5. Inside the `update_setting` function, you should:

   - Convert the provided key to lowercase.
   - Check if the setting exists in the `settings` dictionary.

     - If the setting exists, update its value in the dictionary and return: `"Setting '[key]' updated to '[value]' successfully!"`
     - If the setting does not exist, return: `"Setting '[key]' does not exist! Cannot update a non-existing setting."`

6. You should define a function named `delete_setting` that takes the `settings` dictionary and a string `key` as parameters to delete a specific setting.

7. Inside the `delete_setting` function, you should:

   - Convert the provided key to lowercase.
   - Check if the setting exists in the `settings` dictionary.

     - If the setting exists, remove the key-value pair and return: `"Setting '[key]' deleted successfully!"`
     - If the setting does not exist, return: `"Setting not found!"`

8. You should define a function named `view_settings` that takes the `settings` dictionary as a parameter and returns a formatted string of current settings.

9. Inside the `view_settings` function, you should:

   - Check if the `settings` dictionary contains values.
   - If the dictionary is empty, return: `"No settings available."`
   - If the dictionary contains settings, return them in the following format:

   ```md
   Current User Settings:
   Theme: light
   Language: English
   Notifications: enabled
   ```
