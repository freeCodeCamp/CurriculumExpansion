# This workshop practices list comprehensions and lambda functions by building a function
# that cleans temperature sensor readings and reports how far they are from a given average temperature
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

    # Step 6, format the differences as text with a trailing if:
    # difference_labels = [f'+{difference}°C' for difference in differences if difference > 0]
    # Explain that positive numbers are printed without a sign, so the comprehension adds a +
    # Print difference_labels and point out that there are only 3 labels for 7 temperatures,
    # because a trailing if leaves out the items that don't match the condition,
    # so there's no way to tell which temperature each label belongs to

    # Step 7, remove the trailing if and use the conditional expression
    # f'+{difference}°C' if difference > 0 else f'{difference}°C' before for instead,
    # so that every difference gets a label
    # Point out that negative numbers already have a - sign, so they only need the unit

    # Step 8, add a third label for the temperatures equal to the average
    # by chaining a second conditional expression after else, since +0.0°C or 0.0°C would read oddly
    # Explain that if the first condition is falsy, Python evaluates the next conditional expression
    # Split the expression over multiple lines inside the square brackets to keep it readable
    difference_labels = [
        f'+{difference}°C' if difference > 0
        else f'{difference}°C' if difference < 0
        else 'average'
        for difference in differences
    ]

    # Step 9, pair each temperature with its difference label using map() and a lambda function with two parameters
    # Explain that map() can take more than one iterable, and that it passes one item from each iterable
    # to the function on every call, so the lambda needs one parameter per iterable
    # Print report
    report = list(map(
        lambda temperature, difference_label: f'{temperature}°C ({difference_label})',
        temperatures,
        difference_labels
    ))

    # Step 10, remove the print() calls and return the average and the report as a tuple
    return (average, report)


# Step 3, call the function with readings and average_temperature

# Step 11, unpack the returned tuple, print the average,
# then print the report with each line on its own line by joining it with '\n'
average, report = analyze_temperatures(readings, average_temperature)
print(f'Average temperature: {average}°C')
print('\n'.join(report))
