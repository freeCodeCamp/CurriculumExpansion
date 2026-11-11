import re


def is_valid_setting(key, value):
    if key == 'theme':
        return value in ('light', 'dark')
    if key == 'notifications':
        return value in ('enabled', 'disabled')
    if key == 'refresh_interval':
        return re.fullmatch(r'\d+', value) is not None
    return value != ''


def add_setting(settings, key_value):
    key, value = key_value
    key = key.lower()
    value = value.lower()
    if key in settings:
        return f"Setting '{key}' already exists! Cannot add a new setting with this name."
    elif not is_valid_setting(key, value):
        return f"Invalid value for setting '{key}'."
    else:
        settings[key] = value
        return f"Setting '{key}' added with value '{value}' successfully!"

def update_setting(settings, key_value):
    key, value = key_value
    key = key.lower()
    value = value.lower()
    if key in settings:
        if not is_valid_setting(key, value):
            return f"Invalid value for setting '{key}'."
        settings[key] = value
        return f"Setting '{key}' updated to '{value}' successfully!"
    else:
        return f"Setting '{key}' does not exist! Cannot update a non-existing setting."

def delete_setting(settings, key):
    key = key.lower()
    if key in settings:
        del settings[key]
        return f"Setting '{key}' deleted successfully!"
    else:
        return "Setting not found!"

def view_settings(settings):
    if not settings:
        return "No settings available."
    else:
        settings_str = "Current User Settings:\n"
        for key, value in settings.items():
            settings_str += f"{key.capitalize()}: {value}\n"
        return settings_str

def validate_settings(settings, required_keys):
    if not isinstance(settings, dict):
        return False

    valid_entries = all([
        isinstance(key, str) and key != ''
        and isinstance(value, str) and value != ''
        and is_valid_setting(key.lower(), value.lower())
        for key, value in settings.items()
    ])
    if not valid_entries:
        return False

    setting_keys = set([key.lower() for key in settings])
    return required_keys.issubset(setting_keys)


def get_setting(settings, key, default):
    return settings.get(key.lower(), default)


test_settings = {
    "theme": "light",
    "language": "english",
    "notifications": "enabled"
}

print(add_setting(test_settings, ("VOLUME", "HIGH")))
print(update_setting(test_settings, ("theme", "dark")))
print(delete_setting(test_settings, "language"))
print(view_settings(test_settings))

print(validate_settings(test_settings, {'theme', 'notifications'}))
print(get_setting(test_settings, 'THEME', 'light'))
print(get_setting(test_settings, 'language', 'english'))
