class Employee:
    __base_salaries = {
        "trainee": 600,
        "junior": 1200,
        "mid-level": 1650,
        "senior": 1980,
    }

    def __init__(self, name, level):
        if not (isinstance(name, str) and isinstance(level, str)):
            raise TypeError(f"'name' and 'level' attribute must be of type 'str'.")
        self.__name = name
        self.__level = level
        if level not in Employee.__base_salaries:
            raise ValueError(f"Invalid value '{level}' for 'level' field.")
        self.__salary = Employee.__base_salaries[level]

    def __str__(self):
        return f"{self.__name}: {self.__level}"

    def __repr__(self):
        return f"Employee('{self.__name}', '{self.__level}')"

    def get_name(self):
        return self.__name

    def get_level(self):
        return self.__level

    def get_salary(self):
        return self.__salary

    def raise_salary(self, amount):
        if amount <= 0:
            return "Raise amount must be positive."
        self.__salary += amount
        return f"${amount} raise applied to {self.__name}'s salary."

    def give_promotion(self, level):
        if level not in Employee.__base_salaries:
            raise ValueError(f"Invalid value '{level}' for 'level' field.")
        new_salary = Employee.__base_salaries[level]
        if level == self.__level:
            raise ValueError(f"{self.__level} is already the selected level.")
        if new_salary < Employee.__base_salaries[self.__level]:
            raise ValueError("Cannot give promotion to lower level.")
        self.__level = level
        salary_difference = new_salary - self.__salary
        if salary_difference > 0:
            self.__salary = new_salary
        return f"{self.__name} promoted to {self.__level}."


charlie_brown = Employee("Charlie Brown", "trainee")
print(f"Base salary: ${charlie_brown.get_salary()}")
print(charlie_brown.raise_salary(150))
print(f"Salary after raise: ${charlie_brown.get_salary()}")
print(charlie_brown.give_promotion("junior"))
print(f"Salary after promotion: ${charlie_brown.get_salary()}")
