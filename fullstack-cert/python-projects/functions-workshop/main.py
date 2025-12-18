# This workshop will provide an introduction to functions and scope using a kitchen theme

# Step 1, define some basic data (kitchen inventory)
eggs = 1
flour = 2
sugar = 3

# Step 2, write a basic function to determine kitchen inventory
# Demonstrates local and global scope
def take_inventory():
    # Step 3, define a local scoped variable
    # This should clarify that total_items is accessible only inside take_inventory
    total_items = eggs + flour + sugar

    # Step 4, review printing and string concatenation referencing local and global scoped variables
    print("The kitchen has", total_items, "total items:")
    print("- ", eggs, "eggs")
    print("- ", flour, "flour")
    print("- ", sugar, "sugar")

# Step 5, call a function and immediately see results
take_inventory()

# Step 6, write a function that accepts data and returns a new computed value
# Shows parameterization, reviews conditionals
# Introduces name shadowing (`eggs` inside `use_eggs(..)` will be local, not global)
def use_eggs(eggs, num_eggs):
    # Step 7, review conditionals and local/global scopes
    if num_eggs > eggs:
        print("The kitchen does not have enough eggs.")

        # Step 8, explain that returning in a function ends the function call and returns control
        # to the original call-site (below)
        return eggs, False

    # Step 9, compute the new value of eggs and return it
    # Opportunity to stop and note:
    # - But why do we need to accept "eggs" as a parameter? Why can't we just modify it?
    # - Q: Should we teach that `global` exists, but that it is generally considered bad practice?
    else:
        return eggs - num_eggs, True

# Step 10, introduce calling a function and giving it arguments
use_eggs(eggs, 1)

# Step 11, print the value of the global eggs variable
# Stop and think: Why didn't the number of eggs change? We expect 0, but still get 1!
# For later explanation
print(eggs)

# Step 12, write a function that calls other functions
def make_fried_egg(eggs):
    # Step 13, introduce calling a function and saving its return value
    new_eggs, has_enough_eggs = use_eggs(eggs, 1)

    # Step 14, review conditionals
    if has_enough_eggs:
        print("Made a fried egg. Yummy!")
    else:
        print("Could not make a fried egg. Not enough eggs!")

    # Step 15, return the new value of eggs 
    return new_eggs

# Step 16, use the current value of eggs to make a fried egg.
# Overwrite our inventory egg number with the new number of eggs
# returned by `make_fried_egg`. Here, we can answer the question
# posed by step 10 (and maybe step 8, too, if not done earlier.)
eggs = make_fried_egg(eggs)

# Step 17, take inventory of the kitchen again to see that our number of eggs
# has decreased
take_inventory()
