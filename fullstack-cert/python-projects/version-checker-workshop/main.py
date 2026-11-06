# This workshop practices working with tuples by building a function that checks if an app needs an update
# It comes right after the tuples lectures, so it doesn't use loops

# Step 1, create a tuple of version tuples
# Explain that tuples are immutable, which makes them a good fit for fixed records like version numbers
# The releases are listed in the order they were published, not from lowest to highest version:
# the old 1.9 line kept getting fixes after 2.0.0 was out
# The data is given in the step description, since the seed is empty
releases = (
    (1, 9, 0), (2, 0, 0), (1, 9, 1), (2, 1, 0),
    (2, 1, 1), (2, 2, 0), (1, 9, 2), (2, 2, 1)
)


# Step 2, define the function and sort the releases from highest to lowest version with sorted() and reverse=True
# Tuples are compared element by element, so the versions end up in the correct order
# Print the sorted releases for now
def check_for_update(installed, releases):
    # Step 4, sorted() returns a list, so convert it back to a tuple with tuple() and remove the print() call
    sorted_releases = tuple(sorted(releases, reverse=True))

    # Step 5, the latest version is the first element of the sorted releases
    latest = sorted_releases[0]

    # Step 6, check if the installed version is one of the releases with the in operator
    # Introduces returning a tuple from a function: every branch returns a (status, latest) pair,
    # so the caller can always unpack the result
    if installed not in releases:
        return ('not a known release', latest)

    # Step 8, compare tuples with == to check if the installed version is the latest
    if installed == latest:
        return ('up to date', latest)

    # Step 9, compare the major versions by index
    if installed[0] < latest[0]:
        update_type = 'major update'
    # Step 10, compare the first two elements with slicing
    # (2, 1) < (2, 2) is True, because the first unequal pair decides the result
    elif installed[:2] < latest[:2]:
        update_type = 'minor update'
    # Step 11, if major and minor are the same, only the patch number can be different
    else:
        update_type = 'patch update'

    # Step 12, the releases are sorted from newest to oldest,
    # so the index of the installed version is the number of newer releases
    releases_behind = sorted_releases.index(installed)

    # Step 13, return the status message and the latest version as a tuple
    return (f'{update_type} available, releases behind: {releases_behind}', latest)


# Step 14, define a function to release a new version
# Get the latest version with sorted() and unpack it into major, minor, and patch
def release_version(releases, release_type):
    major, minor, patch = sorted(releases, reverse=True)[0]

    # Step 15, a major release increases the major number and resets the others to 0
    if release_type == 'major':
        new_version = (major + 1, 0, 0)
    # Step 16, add the minor and patch releases
    elif release_type == 'minor':
        new_version = (major, minor + 1, 0)
    else:
        new_version = (major, minor, patch + 1)

    # Step 17, tuples are immutable, so you can't add an item to releases
    # Instead, create a new tuple with the + operator, which joins the elements of two tuples
    # new_version is a tuple itself, so releases + new_version would add 2, 3, and 0 as three separate elements
    # Wrap it in a single-element tuple, (new_version,), so it is added as one element
    # Without the trailing comma, (new_version) would be just new_version
    return releases + (new_version,)


# Step 3, call the function to see the sorted releases printed in the terminal
# Point out that sorted() returned a list

# Step 7, replace the call: unpack the returned tuple into status and latest_version, and print them
status, latest_version = check_for_update((2, 1, 0), releases)
print(f'Status: {status}')
print(f'Latest version: {latest_version}')

# The call argument changes in the steps that add a return, so each step shows the branch it just added:
# Step 6 -> (3, 0, 0): not a known release
# Step 8 -> (2, 2, 1): up to date
# Step 13 -> (2, 1, 0): minor update available, releases behind: 3

# Step 18, release a new minor version, reassign releases, and check (2, 2, 1) again:
# it's not the latest version anymore
releases = release_version(releases, 'minor')
status, latest_version = check_for_update((2, 2, 1), releases)
print(f'Status: {status}')
print(f'Latest version: {latest_version}')
