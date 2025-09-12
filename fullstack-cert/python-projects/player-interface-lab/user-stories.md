1. You should define an abstract class named `Player` that inherits from the `abc.ABC` class.
1. The `Player` class should have an `__init__` method that sets:
- the `position` attribute to `(0, 0)`.
- the `path` attribute to a list containing the initial position.
1. The `Player` class should have a method named `make_move` that:
- uses `random.choice` to get a random move from the `moves` attribute (defined in the concrete class).
- adds the values from the selected move to the current position and updates the `position` attribute.
- appends the new `position` tuple to the `path` attribute.
- returns the new `position`. 
1. The `Player` class should have an abstract method named `level_up` to be implemented in concrete classes.
1. You should define a `Pawn` class that inherits from the `Player` class.
1. The `Pawn` class should use `super()` to call the parent's `__init__` method and then set the `moves` attribute to a list of tuples representing `x, y` coordinates.
1. Each coordinate tuple should represent a movement of `1` unit in the following directions: up, down, left, right.
1. The `Pawn` class should implement a concrete `level_up` method by adding more moves to the `moves` attribute. The added moves should represent the four diagonal movements (for example, `1` unit down plus `1` unit left).