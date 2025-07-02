class Employee:
    __base_salaries = {
        'trainee': 600,
        'junior': 1200,
        'mid-level': 1650,
        'senior': 1980,
    }

    def __init__(self, name, level):
        if not (isinstance(name, str) and isinstance(level, str)):
            raise TypeError("'name' and 'level' attribute must be of type 'str'.")
        self.__name = name
        self.__level = level
        if level not in Employee.__base_salaries:
            raise ValueError(f"Invalid value '{level}' for 'level' field.")
        self.__salary = Employee.__base_salaries[level]

    def __str__(self):
        return f'{self.name}: {self.level}'

    def __repr__(self):
        return f"Employee('{self.name}', '{self.level}')"

    @property
    def name(self):
        return self.__name

    @name.setter
    def name(self, value):
        if not isinstance(value, str):
            raise TypeError("'name' must be a string.")
        self.__name = value

    @property
    def level(self):
        return self.__level

    @level.setter
    def level(self, value):
        if value not in Employee.__base_salaries:
            raise ValueError(f"Invalid value '{value}' for 'level' field.")
        self.__level = value
        self.__salary = Employee.__base_salaries[value]

    @property
    def salary(self):
        return self.__salary

    @salary.setter
    def salary(self, value):
        if not isinstance(value, (int, float)) or value < 0:
            raise ValueError('Salary must be a non-negative number.')
        self.__salary = value

    def raise_salary(self, amount):
        if amount <= 0:
            raise ValueError('Raise amount must be positive.')
        self.salary += amount
        return f'${amount} raise applied to {self.name}\'s salary.'

    def give_promotion(self, level):
        if level not in Employee.__base_salaries:
            raise ValueError(f"Invalid value '{level}' for 'level' field.")
        new_salary = Employee.__base_salaries[level]
        if level == self.level:
            raise ValueError(f"{self.level} is already the selected level.")
        if new_salary < Employee.__base_salaries[self.level]:
            raise ValueError('Cannot give promotion to lower level.')
        self.level = level
        salary_difference = new_salary - self.salary
        if salary_difference > 0:
            self.salary = new_salary
        return f'{self.name} promoted to {self.level}.'


charlie_brown = Employee('Charlie Brown', 'trainee')
print(f'Base salary: ${charlie_brown.salary}')
print(charlie_brown.raise_salary(150))
print(f'Salary after raise: ${charlie_brown.salary}')
print(charlie_brown.give_promotion('junior'))
print(f'Salary after promotion: ${charlie_brown.salary}')
