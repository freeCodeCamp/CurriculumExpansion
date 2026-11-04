class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    @property
    def width(self):
        return self._width

    @width.setter
    def width(self, value):
        if type(value) is not int:
            raise TypeError('Dimension must be an integer.')
        if value <= 0:
            raise ValueError('Dimension must be positive.')
        self._width = value

    @property
    def height(self):
        return self._height

    @height.setter
    def height(self, value):
        if type(value) is not int:
            raise TypeError('Dimension must be an integer.')
        if value <= 0:
            raise ValueError('Dimension must be positive.')
        self._height = value

    @property
    def area(self):
        return self.width * self.height

    @property
    def perimeter(self):
        return 2 * (self.width + self.height)

    @property
    def diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** 0.5

    @property
    def picture(self):
        if self.width > 50 or self.height > 50:
            return 'Too big for picture.'
        return ('*' * self.width + '\n') * self.height

    def amount_inside(self, shape):
        return (self.width // shape.width) * (self.height // shape.height)

    def __str__(self):
        return f'Rectangle(width={self.width}, height={self.height})'

    def __repr__(self):
        return f'Rectangle({self.width!r}, {self.height!r})'


class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)

    @Rectangle.width.setter
    def width(self, value):
        self.side = value

    @Rectangle.height.setter
    def height(self, value):
        self.side = value

    @property
    def side(self):
        return self._width

    @side.setter
    def side(self, side):
        if type(side) is not int:
            raise TypeError('Dimension must be an integer.')
        if side <= 0:
            raise ValueError('Dimension must be positive.')
        self._width = side
        self._height = side

    def __str__(self):
        return f'Square(side={self.width})'

    def __repr__(self):
        return f'Square({self.width!r})'
