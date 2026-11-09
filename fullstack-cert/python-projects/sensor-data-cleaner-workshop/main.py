# This workshop practices list comprehensions and lambda functions by building a function
# that cleans temperature sensor readings and labels them compared to a given average temperature
# It comes right after the list comprehensions and lambda functions lectures

# Step 1, create a list of readings and a variable for the average temperature
# The data is given in the step description, since the seed is empty
# The description explains that the sensor reports temperatures in tenths of a degree, so 215 means 21.5,
# and that it writes the error code -999 when it fails to read the temperature
# It also explains that average_temperature is the usual average temperature for the location,
# already in degrees, and that the readings will be compared to it
readings = [215, 243, -999, 280, 316, 339, -999, 262, 305]
average_temperature = 28.0


# Step 2, define the function with the readings and average parameters,
# and remove the error codes with filter() and a lambda function
# Explain that filter() returns an iterator, so the result is passed to list()
# Print valid_readings for now
def analyze_temperatures(readings, average):
    valid_readings = list(filter(lambda reading: reading != -999, readings))

    # Step 4, convert the readings to degrees with map() and a lambda function
    # Replace the print() call from step 2 with print(temperatures)
    temperatures = list(map(lambda reading: reading / 10, valid_readings))

    # Step 5, calculate how far each temperature is from the average with a list comprehension
    # This is the first comprehension in the workshop, so it has no conditions
    # First without round(): [temperature - average for temperature in temperatures]
    # Replace print(temperatures) with print(differences) and point out values like -3.6999999999999993,
    # explaining that floats can't represent every decimal number exactly
    # Then wrap the subtraction in round() with one decimal place to fix the output
    differences = [round(temperature - average, 1) for temperature in temperatures]

    # Step 6, create the labels from the differences with a trailing if:
    # labels = ['above' for difference in differences if difference > 0]
    # Explain that a positive difference means the temperature is above the average,
    # so the comprehension builds on the list from the previous step
    # Print labels and point out that there are only 3 labels for 7 temperatures,
    # because a trailing if leaves out the items that don't match the condition,
    # so there's no way to tell which temperature each label belongs to

    # Step 7, remove the trailing if and use the conditional expression
    # 'above' if difference > 0 else 'below' before for instead,
    # so that every temperature gets a label

    # Step 8, add a third label for the temperatures equal to the average
    # by chaining a second conditional expression after else
    # Explain that if the first condition is falsy, Python evaluates the next conditional expression
    # Split the expression over multiple lines inside the square brackets to keep it readable
    labels = [
        'above' if difference > 0
        else 'below' if difference < 0
        else 'average'
        for difference in differences
    ]

    # Step 9, remove the print() calls and return the average, the differences and the labels as a tuple
    return (average, differences, labels)


# Step 3, call the function with readings and average_temperature

# Step 10, unpack the returned tuple and print the average, the differences and the labels
average, differences, labels = analyze_temperatures(readings, average_temperature)
print(f'Average temperature: {average}')
print(f'Differences: {differences}')
print(f'Labels: {labels}')
