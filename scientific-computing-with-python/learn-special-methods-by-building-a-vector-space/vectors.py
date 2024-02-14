class Vector:
    space = 'R3'

    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z
        self.norm = (x**2 + y**2 + z**2)**0.5

    def __str__(self):
        return str((self.x, self.y, self.z))
    
    def __repr__(self):
        return f'Vector({self.x}, {self.y}, {self.z})'

    def __add__(self, other):
        if not isinstance(other, Vector):
            return NotImplemented
        x = self.x + other.x
        y = self.y + other.y
        z = self.z + other.z        
        return self.__class__(x, y, z)
    
    def __sub__(self, other):
        if not isinstance(other, Vector):
            return NotImplemented
        x = self.x - other.x
        y = self.y - other.y
        z = self.z - other.z
        return Vector(x, y, z)
    
    def __mul__(self, other):
        # Scalar multiplication
        if isinstance(other, (float, int)):
            x = self.x * other
            y = self.y * other
            z = self.z * other            
            return Vector(x, y, z)
        
        # Scalar product
        elif isinstance(other, Vector):
            x = self.x * other.x
            y = self.y * other.y
            z = self.z * other.z
            scalar = (x**2 + y**2 + z**2)**0.5
            return scalar
        
    def cross(self, other):
        # Cross product
        if not isinstance(other, Vector):
            raise TypeError('Argument must be a Vector instance')
        x = self.y * other.z - self.z * other.y
        y = self.z * other.x - self.x * other.z
        z = self.x * other.y - self.y * other.x
        return Vector(x, y, z)
    
    def __eq__(self, other):
        if not isinstance(other, Vector):
            return NotImplemented
        if self.x == other.x and self.y == other.y and self.z == other.z:
            return True
        return False
    
    def __ne__(self, other):
        return not self == other
    
    def __lt__(self, other):
        if not isinstance(other, Vector):
            return NotImplemented
        return self.norm < other.norm
    
    def __gt__(self, other):
        return not self < other
    
    def __le__(self, other):
        if not isinstance(other, Vector):
            return NotImplemented
        return self.norm <= other.norm
    
    def __ge__(self, other):
        return not self <= other


# Example usage
v1 = Vector(3, 2, 2)
v2 = Vector(4.7, 1, 1.5)
print('v1 =', v1)
print('v2 =', v2)
v3 = v1 + v2
print('v1 + v2 =', v3)
n = v1 * v2
print('v1 * v2 =', n)
v4 = v1.cross(v2)
print('v1 x v2 =', v4)
