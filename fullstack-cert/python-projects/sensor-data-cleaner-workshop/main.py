# This workshop practices list comprehensions and lambda functions by building a function
# that cleans temperature sensor readings and labels them compared to the average temperature
# It comes right after the list comprehensions and lambda functions lectures

# Step 1, create a list of readings
# The data is given in the step description, since the seed is empty
# The description explains that the sensor reports temperatures in tenths of a degree, so 215 means 21.5,
# and that it writes the error code -999 when it fails to read the temperature
readings = [215, 243, -999, 280, 316, 339, -999, 262, 305]


# Step 2, define the function and remove the error codes with filter() and a lambda function
# Explain that filter() returns an iterator, so the result is passed to list()
# Print valid_readings for now
def analyze_temperatures(readings):
    valid_readings = list(filter(lambda reading: reading != -999, readings))

    # Step 4, convert the readings to degrees with map() and a lambda function
    # Replace the print() call from step 2 with print(temperatures)
    temperatures = list(map(lambda reading: reading / 10, valid_readings))

    # Step 5, calculate the average temperature with sum() and len(), rounded to one decimal place with round()
    # Print average
    average = round(sum(temperatures) / len(temperatures), 1)

    # Step 6, create the labels with a trailing if:
    # labels = ['above' for temperature in temperatures if temperature > average]
    # Print labels and point out that there are only 3 labels for 7 temperatures,
    # because a trailing if leaves out the items that don't match the condition,
    # so there's no way to tell which temperature each label belongs to

    # Step 7, remove the trailing if and use the conditional expression
    # 'above' if temperature > average else 'below' before for instead,
    # so that every temperature gets a label

    # Step 8, add a third label for the temperatures equal to the average
    # by chaining a second conditional expression after else
    # Explain that if the first condition is falsy, Python evaluates the next conditional expression
    # Split the expression over multiple lines inside the square brackets to keep it readable
    labels = [
        'above' if temperature > average
        else 'below' if temperature < average
        else 'average'
        for temperature in temperatures
    ]

    # Step 9, remove the print() calls and return the average and the labels as a tuple
    return (average, labels)


# Step 3, call the function with readings

# Step 10, unpack the returned tuple and print the average and the labels
average, labels = analyze_temperatures(readings)
print(f'Average temperature: {average}')
print(f'Labels: {labels}')
