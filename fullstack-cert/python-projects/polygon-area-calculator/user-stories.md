In this project, you will use object-oriented programming to create a `Rectangle` class and a `Square` class. The `Square` class should be a subclass of `Rectangle` and inherit its methods and attributes.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a `Rectangle` class.

2. When a `Rectangle` object is created, it should be initialized with `width` and `height` properties, backed by `_width` and `_height` attributes. Define getters using `@property` and setters using `@width.setter` and `@height.setter`. Initialize the dimensions through these setters. The class should contain the following properties and method:

    - `width`: Gets or sets the width of the rectangle.
    - `height`: Gets or sets the height of the rectangle.
    - `area`: A read-only property defined using `@property` that returns area (\\( \text{width} \times \text{height} \\)).
    - `perimeter`: A read-only property defined using `@property` that returns perimeter \\( 2(\text{width} + \text{height}) \\).
    - `diagonal`: A read-only property defined using `@property` that returns diagonal \\( \sqrt{\text{width}^2 + \text{height}^2} \\).
    - `picture`: A read-only property defined using `@property` that returns a string that represents the shape using lines of `*`. The number of lines should be equal to the height and the number of `*` in each line should be equal to the width. There should be a new line (`\n`) at the end of each line. If the width or height is larger than `50`, this should return the string: `Too big for picture.`
    - `amount_inside`: A method that takes another shape (square or rectangle) as an argument. Returns the number of times the passed in shape could fit inside the shape (with no rotations). For instance, two squares with sides of `4` could fit inside a rectangle with a width of `4` and a height of `8`.

3. If an instance of a `Rectangle` is represented as a string, it should look like: `Rectangle(width=5, height=10)`.

4. You should create a `Square` class that subclasses `Rectangle`.
5. When a `Square` object is created, it should be initialized with a single side length. The `__init__` method should call `super().__init__(side, side)` to initialize both dimensions through the `Rectangle` class.
6. The `Square` class should contain the following properties with getters and setters. The `width` and `height` getters may be reused from `Rectangle` or defined in `Square`:

    - `width`: Returns the width. Its setter should override the setter from the `Rectangle` class and set both width and height to the side length.
    - `height`: Returns the height. Its setter should override the setter from the `Rectangle` class and set both width and height to the side length.
    - `side`: Returns the current side length. Its setter sets the height and width of the square equal to the side length. Define these using `@property` and `@side.setter`.

7. The `Square` class should inherit the `Rectangle` class calculation properties and `amount_inside` method.
8. If an instance of a `Square` is represented as a string, it should look like: `Square(side=9)`.

9. Dimensions must be positive integers. Apply these rules during construction and assignments to `width`, `height`, or `side`:

    - For values that are not integers, including booleans, raise a `TypeError` with the message `Dimension must be an integer.`
    - For integers less than or equal to zero, raise a `ValueError` with the message `Dimension must be positive.`
    - If an update is rejected, leave both existing dimensions unchanged.

10. Both classes should define `__repr__` methods that return constructor-style representations using the current dimensions. For example, `repr(Rectangle(5, 10))` should return `Rectangle(5, 10)`, and `repr(Square(9))` should return `Square(9)`.

## Usage Example

```py
rect = Rectangle(10, 5)
print(rect.area)
rect.height = 3
print(rect.perimeter)
print(rect)
print(rect.picture)

sq = Square(9)
print(sq.area)
sq.side = 4
print(sq.diagonal)
print(sq)
print(sq.picture)

rect.height = 8
rect.width = 16
print(rect.amount_inside(sq))
```

That code should print:

```md
50
26
Rectangle(width=10, height=3)
**********
**********
**********

81
5.656854249492381
Square(side=4)
****
****
****
****

8
```
