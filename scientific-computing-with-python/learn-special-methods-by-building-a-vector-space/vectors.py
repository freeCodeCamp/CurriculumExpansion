class R2Vector:
    def __init__(self, *, x, y):
        self.x = x
        self.y = y
    
    def norm(self):
        return sum(val**2 for val in self.__dict__.values())**0.5

    def __str__(self):
        return str(tuple(self.__getattribute__(i) for i in self.__dict__))

    def __repr__(self):
        arg_list = [f'{key}={val}' for key, val in self.__dict__.items()]
        args = ", ".join(arg_list)
        return f'{self.__class__.__name__}({args})'
    
    def __add__(self, other):
        if not isinstance(other, self.__class__):
            return NotImplemented
        kwargs = {i: self.__getattribute__(i) + other.__getattribute__(i) for i in self.__dict__}
        return self.__class__(**kwargs)
    
    def __sub__(self, other):
        if not isinstance(other, self.__class__):
            return NotImplemented
        kwargs = {i: self.__getattribute__(i) - other.__getattribute__(i) for i in self.__dict__}
        return self.__class__(**kwargs)
    
    def __mul__(self, other):
        # Scalar multiplication
        if isinstance(other, (float, int)):
            kwargs = {i: self.__getattribute__(i) * other for i in self.__dict__}
            return self.__class__(**kwargs)
    
        # Scalar product
        elif isinstance(other, self.__class__):
            args = [self.__getattribute__(i) * other.__getattribute__(i) for i in self.__dict__]
            return (sum(arg**2 for arg in args))**0.5
        
        raise TypeError(f"Multiplication is not defined between '{self.__class__.__name__}' and '{other.__class__.__name__}'")
    
    def __eq__(self, other):
        if not isinstance(other, self.__class__):
            return NotImplemented
        
        if all(self.__getattribute__(i) == other.__getattribute__(i) for i in self.__dict__):
            return True
        return False
    
    def __ne__(self, other):
        return not self == other
    
    def __lt__(self, other):
        if not isinstance(other, self.__class__):
            return NotImplemented
        return self.norm() < other.norm()
    
    def __gt__(self, other):
        return not self < other

    def __le__(self, other):
        if not isinstance(other, self.__class__):
            return NotImplemented
        return self.norm() <= other.norm()
    
    def __ge__(self, other):
        return not self <= other


class R3Vector(R2Vector):
    def __init__(self, *, x, y, z):
        super().__init__(x=x, y=y)
        self.z = z

    def cross(self, other):
        # Cross product
        if not isinstance(other, self.__class__):
            raise TypeError(f"Argument must be a '{self.__class__.__name__}' instance")
        kwargs = {}
        kwargs['x'] = self.y * other.z - self.z * other.y
        kwargs['y'] = self.z * other.x - self.x * other.z
        kwargs['z'] = self.x * other.y - self.y * other.x
        
        return self.__class__(**kwargs)


v1 = R3Vector(x=1, y=2, z=0.2)
v2 = R3Vector(x=2, y=3, z=1.5)
print(f"v1 = {v1}")
print(f"v2 = {v2}")
v3 = v1 + v2
print(f"v1 + v2 = {v3}")
v4 = v1.cross(v2)
print(f"v1 x v2 = {v4}")
