# This workshop introduces numbers and basic math operations in Python
# using a simple "split the bill" scenario with friends.

# Step 1: Starting the running total
# We begin with a total of zero and add costs as we go. This variable
# will be used to keep track of the total bill as costs are added.
running_total = 0

# Step 2: Head count
# This variable stores how many people are splitting the bill
num_of_friends = 4

# Step 3: Adding individual bills
# Each person receives their own bill. Add all the bills together to calculate the 
# total cost.
marks_bill = 37.89
jeffs_bill = 57.34
elons_bill = 39.39
my_bill = 64.21

running_total += marks_bill
print("After Mark's bill:", running_total)

running_total += jeffs_bill
running_total += elons_bill
running_total += my_bill

# Step 4: Calculating the tip
# The service was great, so we leave a 25% tip
tip = running_total * 0.25
print("Tip amount:", tip)

# Step 5: Updating the total using augmented assignment
# The += operator adds a value to a variable and updates it in place
running_total += tip
print("Total with tip:", running_total)

# Step 6: Splitting the bill
# Divide the total evenly among all friends
each_pays = running_total / num_of_friends

print("Each person pays:", each_pays)

# Step 7: Rounding the final amount
# Round the per-person cost to two decimal places
each_pays = round(each_pays, 2)

print("Each person pays:", each_pays)