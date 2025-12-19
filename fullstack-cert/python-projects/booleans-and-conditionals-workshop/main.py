# This workshop will provide an introduction to booleans and conditionals
# using a Movie Ticket Booking theme

# Step 1, define some basic data (user and show details)
base_price = 500
age = 21
show_time = "Evening"     # Morning / Afternoon / Evening
is_weekend = True         # True / False
is_member = False         # True / False


# Step 2, write a simple condition to check basic eligibility
# Demonstrates a single if statement
if age >= 18:
    print("User is eligible to book a ticket")


# Step 3, write an if-else condition to enforce age restrictions
# Reviews decision making using if and else
if age >= 21:
    print("User is eligible for Evening shows")
else:
    print("User is not eligible for Evening shows")


# Step 4, use an AND condition to apply a strict rule
# Both conditions must be true for the discount to apply
if age >= 21 and is_member:
    print("User qualifies for member discount")
else:
    print("User does not qualify for member discount")


# Step 5, use an OR condition to apply flexible rules
# Either condition being true will trigger extra charges
if show_time == "Evening" or is_weekend:
    print("Extra charges will be applied")
else:
    print("No extra charges will be applied")


# Step 6, combine AND and OR conditions using brackets
# Demonstrates operator precedence and complex condition checks
discount = 0
extra_charges = 0

if (age >= 21 and show_time == "Evening") or (age >= 18 and show_time != "Evening"):

    # Step 7, assign a discount based on multiple conditions
    # Uses OR to allow flexibility in discount eligibility
    if age >= 25 or is_member:
        discount = 50

    # Step 8, assign extra charges based on show timing
    # Reviews if-elif-else decision chains
    if show_time == "Evening" or is_weekend:
        extra_charges = 100
    elif show_time == "Afternoon":
        extra_charges = 50
    else:
        extra_charges = 0

    # Step 9, calculate and display the final ticket price
    final_price = base_price - discount + extra_charges
    print("Final ticket price:", final_price)

else:
    print("Ticket booking failed due to restrictions")