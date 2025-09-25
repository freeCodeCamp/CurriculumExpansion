1. You should create a class named `Planet`.
1. The `Planet` class should have an `__init__` method that:
   - Has four parameters: `self`, `name`, `planet_type`, and `star`.
   - Prints the message `Error: name, planet type, and star should be non-empty strings` if any of the arguments passed in is either a non-string type or an empty string.
   - Assigns the values passed in to the instance attributes `name`, `planet_type`, and `star`.
1. The `Planet` class should have an `orbit` method that returns a string in the format `{name} is orbiting around {star}...`.
1. The `Planet` class should have a `__str__` method that returns a string in the format `Planet: {name} | Type: {planet_type} | Star: {star}`.
1. You should create three instances of the `Planet` class named `planet_1`, `planet_2`, and `planet_3`.
1. You should print each planet object to see the `__str__` method output.
1. You should call the `orbit` method on each planet object and print the result.