# String Basics Workshop
# Covers concatenation, augmented assignment, type conversion, f-strings, and slicing

# ========================================
# PART 1: STRING CONCATENATION
# ========================================

first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name

print("First name: " + first_name)
print("Last name: " + last_name)
print("Full name: " + full_name)

# ========================================
# PART 2: AUGMENTED ASSIGNMENT (+=)
# ========================================

address = "123 Main Street"
address += ", Apartment 4B"
address += ", IL 62701"

print("Address: " + address)

# ========================================
# PART 3: TYPE CONVERSION WITH str()
# ========================================

employee_age = 28
years_experience = 5

employee_info = full_name + " is " + str(employee_age) + " years old"
print(employee_info)

experience_info = "Experience: " + str(years_experience) + " years"
print(experience_info)

# ========================================
# PART 4: F-STRINGS FOR FORMATTING
# ========================================

position = "Data Analyst"
salary = 75000

employee_card = f"Employee: {full_name} | Age: {employee_age} | Position: {position} | Salary: ${salary}"
print(employee_card)

monthly_salary = salary / 12
summary = f"{full_name} earns ${monthly_salary:.2f} per month"
print(summary)

# ========================================
# PART 5: STRING SLICING
# ========================================

employee_code = "DEV-2024-JD-001"

department = employee_code[0:3]
year_code = employee_code[4:8]
initials = employee_code[9:11]

print("Full code: " + employee_code)
print("Department: " + department)
print("Year: " + year_code)
print("Initials: " + initials)

last_three = employee_code[-3:]
print("Employee number: " + last_three)

every_other = employee_code[::2]
print("Every other character: " + every_other)