def add_setting(settings, key_value):
    key, value = key_value
    key = key.lower()
    if key in settings:
        return f"Setting '{key}' already exists! Cannot add a new setting with this name."
    else:
        settings[key] = value
        return f"Setting '{key}' added with value '{value}' successfully!"

def update_setting(settings, key_value):
    key, value = key_value
    key = key.lower()
    if key in settings:
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
        settings_str = "\nCurrent User Settings:\n"
        for key, value in settings.items():
            settings_str += f"{key.capitalize()}: {value}\n"
        return settings_str

settings = {
    "theme": "light",
    "language": "English",
    "notifications": "enabled"
}

print(add_setting(settings, ("volume", "high")))
print(update_setting(settings, ("theme", "dark")))
print(delete_setting(settings, "language"))
print(view_settings(settings))
