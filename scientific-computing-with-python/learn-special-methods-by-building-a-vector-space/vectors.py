class R2Vector:
    def __init__(self, *, x, y):
        self.x = x
        self.y = y

    def norm(self):
        return sum(val**2 for val in vars(self).values()) ** 0.5

    def __str__(self):
        return str(tuple(getattr(self, i) for i in vars(self)))

    def __repr__(self):
        arg_list = [f"{key}={val}" for key, val in vars(self).items()]
        args = ", ".join(arg_list)
        return f"{self.__class__.__name__}({args})"

    def __add__(self, other):
        if self.__class__ != other.__class__:
            raise TypeError(
                f"Addition is not defined between '{self.__class__.__name__}' and '{other.__class__.__name__}'"
            )
        kwargs = {i: getattr(self, i) + getattr(other, i) for i in vars(self)}
        return self.__class__(**kwargs)

    def __sub__(self, other):
        if self.__class__ != other.__class__:
            raise TypeError(
                f"Subtraction is not defined between '{self.__class__.__name__}' and '{other.__class__.__name__}'"
            )
        kwargs = {i: getattr(self, i) - getattr(other, i) for i in vars(self)}
        return self.__class__(**kwargs)

    def __mul__(self, other):
        # Scalar multiplication
        if isinstance(other, (float, int)):
            kwargs = {i: getattr(self, i) * other for i in vars(self)}
            return self.__class__(**kwargs)

        # Dot product
        elif self.__class__ == other.__class__:
            args = [getattr(self, i) * getattr(other, i) for i in vars(self)]
            return sum(args)

        raise TypeError(
            f"Multiplication is not defined between '{self.__class__.__name__}' and '{other.__class__.__name__}'"
        )

    def __eq__(self, other):
        if self.__class__ != other.__class__:
            raise TypeError(
                f"Comparison operations are not defined between '{self.__class__.__name__}' and '{other.__class__.__name__}'"
            )
        return all(getattr(self, i) == getattr(other, i) for i in vars(self))

    def __ne__(self, other):
        return not self == other

    def __lt__(self, other):
        if self.__class__ != other.__class__:
            raise TypeError(
                f"Comparison operations are not defined between '{self.__class__.__name__}' and '{other.__class__.__name__}'"
            )
        return self.norm() < other.norm()

    def __gt__(self, other):
        if self.__class__ != other.__class__:
            raise TypeError(
                f"Comparison operations are not defined between '{self.__class__.__name__}' and '{other.__class__.__name__}'"
            )
        return self.norm() > other.norm()

    def __le__(self, other):
        return not self > other

    def __ge__(self, other):
        return not self < other


class R3Vector(R2Vector):
    def __init__(self, *, x, y, z):
        super().__init__(x=x, y=y)
        self.z = z

    def cross(self, other):
        if self.__class__ != other.__class__:
            raise TypeError(f"Argument must be a '{self.__class__.__name__}' instance")
        kwargs = {
            "x": self.y * other.z - self.z * other.y,
            "y": self.z * other.x - self.x * other.z,
            "z": self.x * other.y - self.y * other.x,
        }
        return self.__class__(**kwargs)


v1 = R3Vector(x=2, y=3, z=1)
v2 = R3Vector(x=0.5, y=1.25, z=2)
print(f"v1 = {v1}")
print(f"v2 = {v2}")
v3 = v1 + v2
print(f"v1 + v2 = {v3}")
v4 = v1 - v2
print(f"v1 - v2 = {v4}")
v5 = v1 * v2
print(f"v1 * v2 = {v5}")
v6 = v1.cross(v2)
print(f"v1 x v2 = {v6}")
