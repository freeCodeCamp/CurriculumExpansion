# This workshop practices while loops by building a function that simulates an elevator serving floor requests
# It comes after the loops lectures
# Every while loop is added together with the code that updates its condition, so the code never runs into an infinite loop


# Step 1, define a function that takes a list of floor requests and the starting floor,
# and store the starting floor in a current_floor variable
def run_elevator(requests, start_floor):
    current_floor = start_floor

    # Step 2, add a variable to count the floors travelled
    floors_travelled = 0

    # Step 3, create a while loop that runs as long as there are requests,
    # and remove the first request from the list with pop(0)
    # Explain that a non-empty list is truthy, and that pop(0) makes the list shorter,
    # so the loop stops when the list is empty
    # Print target for now
    while requests:
        target = requests.pop(0)

        # Step 9, stop the elevator with break when the request is 'stop'
        # This check must come before the inner loop, because comparing 'stop' with a number using < raises an error
        if target == 'stop':
            print('Emergency stop!')
            break

        # Step 8, skip the requests for the floor the elevator is already on with continue
        if target == current_floor:
            print(f'Already on floor {target}')
            continue

        # Step 5, add a nested while loop that moves the elevator one floor at a time until it reaches the target
        while current_floor != target:
            if current_floor < target:
                current_floor += 1
            else:
                current_floor -= 1
            # Step 6, count each floor travelled
            floors_travelled += 1

        # Step 7, replace the print() call from step 3 with a message for when the elevator arrives
        print(f'Arrived at floor {current_floor}')
    # Step 10, add an else clause to the outer loop
    # Explain that it runs only when the loop ends without break
    else:
        print('All requests served')

    # Step 12, return the final floor and the floors travelled as a tuple
    return current_floor, floors_travelled


# Step 4, call the function with [3, 7, 2] as the requests and 1 as the starting floor

# Step 8 (continued), update the requests to [3, 3, 7, 2]
# Step 9 (continued), update the requests to [3, 3, 7, 'stop', 2]
# Step 11, remove 'stop' from the requests, so the else clause runs

# Step 13, unpack the returned tuple and print a summary
final_floor, floors_travelled = run_elevator([3, 3, 7, 2], 1)
print(f'Final floor: {final_floor}, floors travelled: {floors_travelled}')
