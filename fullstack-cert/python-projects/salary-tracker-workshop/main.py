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
    def name(self, new_name):
        if not isinstance(new_name, str):
            raise TypeError("'name' must be a string.")
        self.__name = new_name
        print(f"'name' updated to {self.name}.")

    @property
    def level(self):
        return self.__level

    @level.setter
    def level(self, new_level):
        if new_level not in Employee.__base_salaries:
            raise ValueError(f"Invalid value '{new_level}' for 'level' field.")
        if new_level == self.level:
            raise ValueError(f"'{self.level}' is already the selected level.")
        if Employee.__base_salaries[new_level] < Employee.__base_salaries[self.level]:
            raise ValueError(f"Cannot change to lower level.")
        self.__level = new_level
        self.__salary = Employee.__base_salaries[new_level]
        print(f"'{self.name}' promoted to '{new_level}'.")

    def demote(self):
        if self.level == 'trainee':
            raise ValueError("Cannot demote a trainee.")
        keys = list(Employee.__base_salaries.keys())
        new_level = keys[keys.index(self.level) - 1]
        self.__level = new_level
        print(f"'{self.name}' demoted to '{new_level}'.")

    @property
    def salary(self):
        return self.__salary

    @salary.setter
    def salary(self, new_salary):
        if not isinstance(new_salary, (int, float)):
            raise TypeError("'salary' must be a number.")
        if new_salary <= Employee.__base_salaries[self.level]:
            raise ValueError(f'Salary must be higher than minimum salary ${Employee.__base_salaries[self.level]}.')
        self.__salary = new_salary
        print(f'Salary updated to ${self.salary}.')


charlie_brown = Employee('Charlie Brown', 'trainee')
print(charlie_brown)
print(f'Base salary: ${charlie_brown.salary}')
charlie_brown.salary += 150
charlie_brown.level = 'junior'
print(f'Salary after promotion: ${charlie_brown.salary}')