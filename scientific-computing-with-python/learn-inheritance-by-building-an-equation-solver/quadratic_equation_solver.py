from abc import ABC, abstractmethod
import re


class Equation(ABC):
    def __init__(self, *args):
        if (self.degree + 1) != len(args):
            raise TypeError(
                f"'Equation' object takes {self.degree + 1} positional arguments but {len(args)} were given"
            )
        for arg in args:
            if not isinstance(arg, (int, float)):
                raise TypeError("Coefficients must be of type 'int' or 'float'")
        if args[0] == 0:
            raise ValueError("Highest degree coefficient must be different from zero")
        self.coefficients = {n: arg for n, arg in enumerate(reversed(args))}
        self.results = []
        self.details = []

    def __str__(self):
        terms = []
        for n, coefficient in self.coefficients.items():
            if coefficient:
                if n == 0:
                    terms.append(f"{coefficient:+}")
                elif n == 1:
                    terms.insert(0, f"{coefficient:+}x")
                else:
                    terms.insert(0, f"{coefficient:+}x**{n}")
        equation_string = " ".join(terms)
        equation_string += " = 0"
        return re.sub(r"(?<!\d)1(?=x)", "", equation_string.strip("+"))

    @property
    @abstractmethod
    def degree(self): ...

    @property
    @abstractmethod
    def type(self): ...

    @abstractmethod
    def solve(self): ...

    @abstractmethod
    def analyze(self): ...


class LinearEquation(Equation):
    @property
    def degree(self):
        return 1

    @property
    def type(self):
        return "Linear Equation"

    def solve(self):
        x = -self.coefficients[0] / self.coefficients[1]
        self.results.append(f"x = {x:.3f}")
        return [x]

    def analyze(self):
        self.details.append(
            f"slope = {self.coefficients[1]:>16}\ny-intercept = {self.coefficients[0]:>10}"
        )
        return {"slope": self.coefficients[1], "intercept": self.coefficients[0]}


class QuadraticEquation(Equation):
    def __init__(self, *args):
        super().__init__(*args)
        self.delta = (
            self.coefficients[1] ** 2 - 4 * self.coefficients[2] * self.coefficients[0]
        )

    @property
    def degree(self):
        return 2

    @property
    def type(self):
        return "Quadratic Equation"

    def solve(self):
        if self.delta < 0:
            self.results.append("No real roots")
            return []

        x1 = (-self.coefficients[1] + (self.delta) ** 0.5) / (2 * self.coefficients[2])
        x2 = (-self.coefficients[1] - (self.delta) ** 0.5) / (2 * self.coefficients[2])
        if self.delta == 0:
            self.results.append(f"x = {x1:.3f}")
            return [x1]

        self.results.extend([f"x1 = {x1:.3f}", f"x2 = {x2:.3f}"])
        return [x1, x2]

    def analyze(self):
        x = -self.coefficients[1] / (2 * self.coefficients[2])
        y = (
            self.coefficients[2] * x**2
            + self.coefficients[1] * x
            + self.coefficients[0]
        )
        vertex = {"x": x, "y": y}
        if self.coefficients[2] > 0:
            concavity = "upwards"
            vertex["m"] = "min"
        else:
            concavity = "downwards"
            vertex["m"] = "max"
        coord = f"({x:.3f}, {y:.3f})"
        self.details.append(f'concavity = {concavity:>12}\n{vertex["m"]} = {coord:>18}')
        return {"vertex": vertex, "concavity": concavity}


def solver(equation):
    if not isinstance(equation, Equation):
        raise TypeError("Argument must be an Equation object")
    if not equation.results:
        equation.solve()
    if not equation.details:
        equation.analyze()
    output_string = "\n{:-^24}".format(equation.type)
    output_string += f"\n\n{str(equation):^24}\n\n"
    output_string += "{:-^24}".format("Solutions") + "\n\n"
    for result in equation.results:
        output_string += f"{result:^24}\n"
    output_string += "\n"
    output_string += "{:-^24}".format("Details") + "\n\n"
    for detail in equation.details:
        output_string += detail + "\n"
    print(output_string)


lin_eq = LinearEquation(2, 3)
solver(lin_eq)
quadr_eq = QuadraticEquation(2, -3, -2)
solver(quadr_eq)
