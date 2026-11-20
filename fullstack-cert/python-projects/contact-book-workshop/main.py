contacts = {
    'Maria': {'phone': '555-0101', 'email': 'maria@example.com', 'group': 'work'}
}


def save_contact(contacts, name, details):
    contact = contacts.get(name, {'phone': None, 'email': None, 'group': None})

    for field in details.keys():
        if field not in contact:
            return f'Unknown field: {field}'

    action = 'Updated' if name in contacts else 'Added'
    contact.update(details)
    contacts[name] = contact
    return f'{action} {name}'


def format_contact(contacts, name):
    contact = contacts.get(name)

    if contact is None:
        return f'{name} not found'

    text = name
    for field, value in contact.items():
        if value is None:
            continue
        text += f'\n  {field}: {value}'
    return text


def rename_contact(contacts, old_name, new_name):
    if old_name not in contacts:
        return f'{old_name} not found'

    if new_name in contacts:
        return f'{new_name} is already in your contacts'

    contacts[new_name] = contacts.pop(old_name)
    return f'Renamed {old_name} to {new_name}'


def search_contacts(contacts, query):
    results = {}
    for name, details in contacts.items():
        if query.lower() in name.lower():
            results[name] = details
    return results


def count_by_group(contacts):
    counts = {}
    for details in contacts.values():
        group = details['group']
        if group is None:
            continue
        counts[group] = counts.get(group, 0) + 1
    return counts


print(save_contact(contacts, 'James', {'phone': '555-0102', 'email': 'james@example.com', 'group': 'work'}))
print(save_contact(contacts, 'Sarah', {'phone': '555-0103', 'group': 'friends'}))
print(save_contact(contacts, 'David', {'phone': '555-0104', 'group': 'family'}))
print(save_contact(contacts, 'Lucas', {'phone': '555-0105'}))

print(format_contact(contacts, 'Sarah'))
print(format_contact(contacts, 'Emma'))

print(save_contact(contacts, 'Sarah', {'phone': '555-0199', 'email': 'sarah@example.com'}))
print(format_contact(contacts, 'Sarah'))

print(save_contact(contacts, 'Sarah', {'phon': '555-0000'}))

print(rename_contact(contacts, 'David', 'Dave'))
print(rename_contact(contacts, 'Dave', 'Maria'))
print(rename_contact(contacts, 'Emma', 'Em'))
print(format_contact(contacts, 'Dave'))

print(search_contacts(contacts, 'AR'))
print(search_contacts(contacts, 'xyz'))

print(count_by_group(contacts))
