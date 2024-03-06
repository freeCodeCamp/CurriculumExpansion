from abc import ABC, abstractmethod
import re


class Equation(ABC):
    """
    Equation objects are instantiated providing the equation coefficients as arguments.
    The coefficient order goes from the zero-th grade of x to the n-th grade.
    Coefficients with the value of zero must be specified.
    """
    def __init__(self, *args):
        if (self.grade + 1)!= len(args):
            raise TypeError(f"'Equation' object takes {self.grade + 1} positional arguments but {len(args)} were given")
        for arg in args:            
            if not isinstance(arg, (int, float)):
                raise TypeError("Coefficients must be of type 'int' or 'float'")
        if args[-1] == 0:
            raise ValueError('Highest order coefficient must be different from zero')
        self.coefficients = {n: arg for n, arg in enumerate(args)}
        self.results = []
        self.details = []        

    def __str__(self):
        terms = []        
        for n, coefficient in self.coefficients.items():            
            if coefficient:
                if n == 0:
                    terms.append(f'{coefficient:+}')
                elif n == 1:
                    terms.insert(0, f'{coefficient:+}x')
                else:
                    terms.insert(0, f'{coefficient:+}x**{n}')
        equation_string = ' '.join(terms)
        equation_string += ' = 0'
        return re.sub(r'(?<!\d)1(?=x)', '', equation_string.strip('+'))
    
    @property
    @abstractmethod
    def grade(self):
        ...

    @property
    @abstractmethod
    def type(self):
        ...
    
    @abstractmethod
    def solve(self):
        ...

    @abstractmethod
    def analyze(self):
        ...

    
class LinearEquation(Equation):
    @property
    def grade(self):
        return 1
    
    @property
    def type(self):
        return 'Linear Equation'

    def solve(self):
        x = - self.coefficients[0] / self.coefficients[1]
        self.results.append(f'x = {round(x, 3)}')
        return [x]
    
    def analyze(self):
        self.details.append(f'slope = {self.coefficients[1]:>16}\ny-intercept = {self.coefficients[0]:>10}')
        return {'slope': self.coefficients[1], 'intercept': self.coefficients[0]}


class QuadraticEquation(Equation):
    def __init__(self, *args):
        super().__init__(*args)
        self.delta = self.coefficients[1]**2 - 4 * self.coefficients[2] * self.coefficients[0]

    @property
    def grade(self):
        return 2
    
    @property
    def type(self):
        return 'Quadratic Equation'

    def solve(self):
        if self.delta < 0:
            self.results.append('No real roots')            
            return []

        x1 = (- self.coefficients[1] + (self.delta)**0.5)/(2 * self.coefficients[2])
        x2 = (- self.coefficients[1] - (self.delta)**0.5)/(2 * self.coefficients[2])        
        if self.delta == 0:
            self.results.append(f'x = {round(x1, 3)}')            
            return [x1]

        self.results.extend([f'x1 = {round(x1, 3)}', f'x2 = {round(x2, 3)}'])        
        return [x1, x2]

    def analyze(self):
        x = - self.coefficients[1] / (2 * self.coefficients[2])
        y = self.coefficients[2] * x**2 + self.coefficients[1] * x + self.coefficients[0]
        vertex = {'x': x, 'y': y}                    
        if self.coefficients[2] > 0:
            concavity = 'upwards'
            vertex['m'] = 'min'            
        else:
            concavity = 'downwards'
            vertex['m'] = 'max'
        coord = f'{(round(x, 3), round(x, 3))}'
        self.details.append(f'concavity = {concavity:>12}\n{vertex["m"]} = {coord:>18}')
        return {'vertex': vertex, 'concavity': concavity}
    

class Solver:
    def __init__(self, equation):
        if not isinstance(equation, Equation):
            raise TypeError("Argument must be an Equation object")
        self.equation = equation

    def _solve(self):
        self.equation.solve()
        self.equation.analyze()
    
    def create_output(self):
        self._solve()
        output_string = '\n{:-^24}'.format(self.equation.type) + f'\n\n{str(self.equation):^24}\n\n'        
        output_string += '{:-^24}'.format('Solutions')
        output_string += '\n\n'
        for result in self.equation.results:
            output_string += f'{result:^24}\n'
        output_string += '\n'        
        output_string += '{:-^24}'.format('Details')
        output_string += '\n\n' 
        for detail in self.equation.details:
            output_string += detail
        output_string += '\n'
        print(output_string)
        

eq1 = QuadraticEquation(-2, -3, 2)
eq2 = LinearEquation(2, 4)
s = Solver(eq2)
s.create_output()