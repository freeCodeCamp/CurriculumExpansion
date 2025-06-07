1. You should create a dictionary named `settings` that stores the following user configuration preferences:

   ```md
       "theme": "light",
       "language": "English",
       "notifications": "enabled"
   ```

1. You should define a function named `add_setting` that takes a dictionary of settings and a tuple containing a key-value pair as arguments.
1. `add_setting(settings, (key, value))` should:
    - Convert `key` to lowercase.
    - If the `key` setting exists, return `Setting 'key' already exists! Cannot add a new setting with this name.`
    - If the `key` setting doesn't exist, add the key-value pair to the `settings` dictionary and return `Setting 'key' added with value 'value' successfully!`

1. You should define a function named `update_setting` that takes the a dictionary of settings and a tuple containing a key-value pair as arguments.
1. `update_setting(settings, (key, value))` should:
    - Convert `key` to lowercase.
    - If the `key` setting exists, update its value in the `settings` dictionary and return: `Setting 'key' updated to 'value' successfully!`
    - If the `key` setting doesn't exist, return `Setting 'key' does not exist! Cannot update a non-existing setting.`

1. You should define a function named `delete_setting` that takes the a dictionary of settings and a key as arguments.
1. `delete_setting(settings, key)` should:
    - Convert `key` to lowercase.
    - If the `key` setting exists, remove the key-value pair from `settings` and return `Setting 'key' deleted successfully!`
    - If the `key` setting does not exist, return `Setting not found!`

1. You should define a function named `view_settings` that takes a dictionary of settings as argument.
1. `view_settings(settings)` should:
    - Return `No settings available.` if the `settings` dictionary is empty.
    - If the dictionary contains any settings, return them formatted as follows:

    ```md
Current User Settings:
Theme: dark
Notifications: enabled
Volume: high

    ```
