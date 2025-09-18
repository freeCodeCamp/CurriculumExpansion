1. Create a class named `Planet` with an `__init__` method that takes `name`, `planet_type`, and `star` parameters.
2. In the `__init__` method, add validation to check that none of the parameters are empty strings, and print an error message if any are empty.
3. In the `__init__` method, create instance attributes `self.name`, `self.planet_type`, and `self.star` to store the parameter values.
4. Create an `orbit` method that returns a string in the format `'{name} is orbiting around {star}...'`.
5. Create a `__str__` method that returns a string in the format `'Planet: {name} | Type: {planet_type} | Star: {star}'`.
6. Test your class by creating three Planet instances with different names, types, and stars.
7. Call the `orbit` method on each planet and print the returned string.
8. Print each planet object to see the `__str__` method output.