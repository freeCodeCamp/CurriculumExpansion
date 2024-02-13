import re

class QuadraticEquation: 
    type = 'Equation'

    def __init__(self, a=0, b=0, c=0):
        if a == 0:
            raise ValueError(f"'{self.__class__.__name__}.a' must be different from zero")
        self.a = a
        self.b = b
        self.c = c        
        self.line = self.__prettify_line() + ' = 0'
        self.delta = self.b**2 - 4 * self.a * self.c
        self.results = set()
        self.details = set()

    def __prettify_line(self):
        line = ''
        if self.a != 0:
            if self.a == 1:
                line += 'x² '
            elif self.a == -1:
                line += '-x² '
            else:
                line += f'{self.a}x² '
        if self.b != 0:            
           line += '{:+}x '.format(self.b)
        if self.c != 0:            
            line += '{:+}'.format(self.c)
        line = line.replace('+1x', '+x').replace('-1x', '-x')
        return line
    
    def create_output(self):
        output_string = '\n{:-^24}'.format(self.type) + f'\n\n{self.line:^24}\n\n'
        if self.results:
            output_string += '{:-^24}'.format('Solutions')
            output_string += '\n\n'
            for result in self.results:
                output_string += f'{result:^24}\n'
            output_string += '\n'
        if self.details:
            output_string += '{:-^24}'.format('Details')
            output_string += '\n\n' 
            for detail in self.details:
                output_string += detail
            output_string += '\n'
        return output_string
    
    def __str__(self):
        return self.create_output()
    
    @staticmethod    
    def parse(expression, coeff={'a': 0, 'b': 0, 'c': 0}):
        transformed_expr = QuadraticEquation.__validate(expression)
        terms = re.split(r'(?<!^)(?=[\+-])', transformed_expr)        
        for term in terms:
            try:
                spaceless_term = re.sub(r'\s', '', term)
                if 'x**2' in spaceless_term:
                    a = re.split(r'\*?x\*\*2', spaceless_term)[0]
                    coeff['a'] = float(QuadraticEquation.__fix(a))           
                elif ('x' or 'x**1') in spaceless_term:
                    b = re.split(r'\*?x', spaceless_term)[0]
                    coeff['b'] = float(QuadraticEquation.__fix(b))
                else:
                    c = spaceless_term
                    coeff['c'] = float(c)
            except Exception:
                raise ValueError('Expression should be quadratic in the form "ax**2 + bx + c"')
        return coeff
    
    @staticmethod
    def __validate(expression):
        transformed_expr = re.sub(r'\s', '', expression).replace('X', 'x')        
        bad_char = re.search(r'[^x\d\.\+\-\*]', transformed_expr)
        higher = re.findall(r'x\*\*([^12]|\d{2,})', transformed_expr)
        quadratic_term = re.search(r'x\*\*2', transformed_expr)
        consecutive_sign = re.search(r'[\+-][\+-]', transformed_expr)
        repetition_patterns = [r'x\*\*2', r'x\*\*1', r'x(?:[\+-]|$)', r'(?<!\*)\d+(?:\.\d+)?(?:[\+-]|$)']
        repetitions = any(len(re.findall(pattern, transformed_expr)) > 1 for pattern in repetition_patterns)    
        if any([bad_char, higher, not quadratic_term, consecutive_sign, repetitions]):
            raise ValueError('Expression should be quadratic in the form "ax**2 + bx + c"')
        return transformed_expr

    @staticmethod
    def __fix(term):
        if re.search(r'\d', term) is None:
                term += '1'        
        return term
    
    def solve(self): 
        if self.delta < 0:
            roots = {'x₁': None, 'x₂': None}
            self.results.add('No real roots')
            return roots
                
        x1 = (- self.b + (self.delta)**0.5)/(2 * self.a)
        x2 = (- self.b - (self.delta)**0.5)/(2 * self.a)        
        if self.delta == 0:        
            roots = {'x': x1}
            self.results.add(f'x = {round(x1, 3)}')
            return roots
                       
        roots = {'x1': x1, 'x2': x2}
        self.results.add(f'x1 = {round(x1, 3)}')
        self.results.add(f'x2 = {round(x2, 3)}')
        return roots
    
    def analyze(self):                
        x = - self.b / (2 * self.a)
        y = self.a * x**2 + self.b * x + self.c
        vertex = {'x': x, 'y': y}                    
        if self.a > 0:
            concavity = 'upwards'
            vertex['m'] = 'min'            
        else:
            concavity = 'downwards'
            vertex['m'] = 'max'
        coord = f'{(round(x, 3), round(x, 3))}'
        self.details.add(f'concavity = {concavity:>12}\n{vertex["m"]} = {coord:>18}')
        return vertex, concavity
    

class QuadraticInequality(QuadraticEquation):
    type = 'Inequality'

    def __init__(self, sign='>', a=0, b=0, c=0,):
        super().__init__(a, b, c)        
        self.sign = sign
        self.line = self.line.replace('=', self.sign )

    def __invert_sign(self):
        if self.a < 0:
            self.a *= -1
            self.b *= -1
            self.c *= -1
            if '>' in self.sign:
                self.sign = self.sign.replace('>', '<')
            elif '<' in self.sign:
                self.sign = self.sign.replace('<', '>')

    def solve(self):
        self.__invert_sign()
        if self.delta < 0:
            if '>' in self.sign:
                self.results.add('∀ x')
            elif '<' in self.sign:
                self.results.add('∄ x')
            return self.results
        
        x1 = (- self.b + (self.delta)**0.5)/(2 * self.a)
        x2 = (- self.b - (self.delta)**0.5)/(2 * self.a)        
        if self.delta == 0:
            if self.sign == '>':
                self.results.add(f'x ≠ {round(x1, 3)}')
            elif self.sign == '>=':
                self.results.add(f'∀ x')
            elif self.sign == '<':
                self.results.add(f'∄ x')
            elif self.sign == '<=':
                self.results.add(f'x = {round(x1, 3)}')
            return self.results
        
        x_min = min(x1, x2)
        x_max = max(x1, x2)
        e = '=' if '=' in self.sign else ''
        if '>' in self.sign:            
            self.results.update((f'x <{e} {round(x_min, 3)}', f'x >{e} {round(x_max, 3)}'))
        elif '<' in self.sign:            
            self.results = {f'{round(x_min, 3)} <{e} x <{e} {round(x_max, 3)}'}        
        return self.results

    def analyze(self):
        raise AttributeError("'QuadraticInequality' object has no attribute 'analyze'")
        
expression = '-x**2  -4.5x +1.2'
coefficients = QuadraticEquation.parse(expression)
eq = QuadraticEquation(**coefficients)
eq.solve()
eq.analyze()
print(eq)

ineq = QuadraticInequality('<', **coefficients)
ineq.solve()
#ineq.analyze()
print(ineq)
