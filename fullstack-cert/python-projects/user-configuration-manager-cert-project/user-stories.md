In this lab, you will build a User Configuration Manager that allows users to manage their settings such as theme, language, and notifications. You will implement functions to add, update, delete, and view user settings, validate configurations, and retrieve individual settings with fallback values.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define a function named `add_setting` with two parameters representing a dictionary of settings and a tuple containing a key-value pair.

1. The `add_setting` function should:
    
   - Convert the key and value to lowercase.
   - If the key exists, return `Setting '[key]' already exists! Cannot add a new setting with this name.`
   - If the key doesn't exist, call `is_valid_setting` with the lowercase key and value. If it returns `False`, return `Invalid value for setting '[key]'.` without changing the dictionary.
   - If the key doesn't exist and the value is valid, add the key-value pair to the given dictionary of settings and return `Setting '[key]' added with value '[value]' successfully!`
   - The messages returned should have the key and value in lowercase.

1. You should define a function named `update_setting` with two parameters representing a dictionary of settings and a tuple containing a key-value pair.

1. The `update_setting` function should:
       
   - Convert the key and value to lowercase.
   - If the key exists, call `is_valid_setting` with the lowercase key and value. If it returns `False`, return `Invalid value for setting '[key]'.` without changing the dictionary.
   - If the key exists and the value is valid, update its value in the given dictionary of settings and return `Setting '[key]' updated to '[value]' successfully!`
   - If the key doesn't exist, return `Setting '[key]' does not exist! Cannot update a non-existing setting.`
   - The messages returned should have the key and value in lowercase.


1. You should define a function named `delete_setting` with two parameters representing a dictionary of settings and a key.

1. The `delete_setting` function should:
    
   - Convert the key passed to lowercase.
   - If the key exists, remove the key-value pair from the given dictionary of settings and return `Setting '[key]' deleted successfully!`
   - If the key does not exist, return `Setting not found!`
   - The messages returned should have the key in lowercase.

1. You should define a function named `view_settings` with one parameter representing a dictionary of settings.

1. The `view_settings` function should:
   
   - Return `No settings available.` if the given dictionary of settings is empty. 
   - If the dictionary contains any settings, return a string displaying the settings. The string should start with `Current User Settings:` followed by the key-value pairs, each on a new line and with the key capitalized, and the string should end with a newline character after the last setting. For example, `view_settings({'theme': 'dark', 'notifications': 'enabled', 'volume': 'high'})` should return:

   ```md
   Current User Settings:
   Theme: dark
   Notifications: enabled
   Volume: high
   
   ```

1. For testing the code, you should create a dictionary named `test_settings` to store some user configuration preferences.

1. You should import the `re` module and define a function named `is_valid_setting` with two parameters: `key` and `value`. Both arguments will be lowercase strings.

1. The `is_valid_setting` function should return a boolean using these rules:

   - For `theme`, only `light` and `dark` are valid.
   - For `notifications`, only `enabled` and `disabled` are valid.
   - For `refresh_interval`, use `re.fullmatch` with the raw-string pattern `r'\d+'` to accept one or more decimal digits. For example, `30` and `0` are valid strings; `30s`, `-5`, `1.5`, and an empty string are invalid. Return `True` when the match is not `None`, and `False` otherwise.
   - For any other setting, accept any nonempty string.

1. The key and value passed to `add_setting` and `update_setting` will be strings, and existing dictionary keys will be lowercase. Check whether the key exists before validating its value: adding an existing key or updating a missing key should return the existing key-related error, even if the supplied value is invalid.

1. You should define a function named `validate_settings` with two parameters: `settings` and `required_keys`. `required_keys` will be a set of lowercase strings representing settings that must be present.

1. The `validate_settings` function should:

   - Return `False` if `settings` is not a dictionary.
   - Use `isinstance` and `all` to check that every key and value is a nonempty string. Return `False` if any entry fails this check.
   - Call `is_valid_setting` for each entry using the lowercase key and value. Return `False` if any setting fails its value rule. Check the key and value types before calling string methods or the helper.
   - Treat setting names as case-insensitive. Use `set()` to create a set of the lowercase keys and a set operation or comparison to check that every required key is present.
   - Return `True` if all entries are valid and every required key is present; otherwise, return `False`. Additional keys are allowed.
   - Return `True` for an empty dictionary when `required_keys` is empty, and `False` for an empty dictionary when any key is required.
   - Leave the dictionary and required-key set unchanged.

1. You should define a function named `get_setting` with three parameters: a dictionary of settings, a string key, and a fallback value. The dictionary's keys will already be lowercase.

1. The `get_setting` function should:

   - Convert the requested key to lowercase.
   - Use the dictionary's `get` method to return the stored value if the key exists, or the fallback value if it does not.
   - Return the stored value unchanged, including an empty string, rather than replacing it with the fallback.
   - Leave the dictionary unchanged.

The add and update functions should call the shared `is_valid_setting` helper, not `validate_settings`. Required keys are checked only when `validate_settings` is called; deleting a required key remains allowed.

## Usage Example

```py
settings = {'theme': 'dark', 'language': 'english'}
required_keys = {'theme', 'language'}

print(validate_settings(settings, required_keys))
print(validate_settings({'theme': 'dark'}, required_keys))
print(validate_settings({'THEME': 'dark'}, {'theme'}))
print(validate_settings({'volume': 10}, set()))
print(validate_settings({}, set()))
print(get_setting(settings, 'THEME', 'light'))
print(get_setting(settings, 'notifications', 'enabled'))
print(get_setting({'language': ''}, 'language', 'english'))
```

That code should print:

```md
True
False
True
False
True
dark
enabled

```

For example, invalid additions and updates should leave existing settings unchanged:

```py
settings = {'theme': 'dark'}
print(add_setting(settings, ('REFRESH_INTERVAL', '30')))
print(update_setting(settings, ('theme', 'blue')))
print(add_setting(settings, ('notifications', 'sometimes')))
print(validate_settings({'refresh_interval': '30s'}, set()))
print(settings)
```

That code should print:

```md
Setting 'refresh_interval' added with value '30' successfully!
Invalid value for setting 'theme'.
Invalid value for setting 'notifications'.
False
{'theme': 'dark', 'refresh_interval': '30'}
```
