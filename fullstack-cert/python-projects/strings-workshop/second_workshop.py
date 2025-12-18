# Strings Second Workshop Prototype
# This workshop teaches string concatenation, slicing, methods, and some f-strings

# ========================================
# PART 1: STRING CONCATENATION
# ========================================

first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name
print("First name: " + first_name)
print("Last name: " + last_name)
print("Full name: " + full_name)

print()

# ========================================
# PART 2: AUGMENTED ASSIGNMENT (+=)
# ========================================

address = "123 Main Street"
address += ", "
address += "Apartment 4B"
print("Address: " + address)
address += ", "
address += "IL 62701"
print("Address: " + address)

print()

# ========================================
# PART 3: TYPE CONVERSION WITH str()
# ========================================

employee_name = "Jane Smith"
employee_age = 28
years_experience = 5

employee_info = employee_name + " is " + str(employee_age) + " years old"
print(employee_info)

print()

# ========================================
# PART 4: F-STRINGS FOR FORMATTING
# ========================================

name = "Michael Brown"
position = "Data Analyst"
salary = 75000
department = "Analytics"

employee_card = f"Employee: {name} | Position: {position} | Salary: ${salary}"
print(employee_card)

print()

# ========================================
# PART 5: STRING SLICING
# ========================================

employee_code = "DEV-2024-JD-001"

department = employee_code[0:3]
initials = employee_code[9:11]

print("Full code: " + employee_code)
print("Department: " + department)
print("Initials: " + initials)

last_three = employee_code[-3:]
year = employee_code[-11:-7]

print("Employee number: " + last_three)
print("Year: " + year)

two_gap = employee_code[::2]
print("Gap of 2: " + two_gap)

print()

# ========================================
# PART 6: FINDING SUBSTRINGS
# ========================================

email = "alice.johnson@company.com"

at_position = email.find("@")
print("Position of @: " + str(at_position))

username = email[:at_position]
print("Username: " + username)

has_at = "@" in email
has_com = ".com" in email
print("Has @ symbol: " + str(has_at))
print("Has .com: " + str(has_com))

print()

# ========================================
# PART 7: STRING METHODS - CASE CONVERSION
# ========================================

messy_name = "  SARAH DAVIS  "
messy_email = "  Sarah.Davis@COMPANY.COM  "

clean_name = messy_name.strip().title()
clean_email = messy_email.strip().lower()

print("Original name: '" + messy_name + "'")
print("Cleaned name: '" + clean_name + "'")
print("Original email: '" + messy_email + "'")
print("Cleaned email: '" + clean_email + "'")

name_badge = clean_name.upper()
print("Name badge: " + name_badge)

print()

# ========================================
# PART 8: STRING METHODS - MANIPULATION
# ========================================

phone_messy = "123-456-7890"
phone_clean = phone_messy.replace("-", "")
print("Phone with dashes: " + phone_messy)
print("Phone without dashes: " + phone_clean)

departments = ["Engineering", "Sales", "Marketing"]
departments_string = ", ".join(departments)
print("Departments: " + departments_string)

full_address = "123 Main Street, Springfield, IL"
address_parts = full_address.split(", ")
print("Full address: " + full_address)
print("Address parts: " + str(address_parts))

print()

# ========================================
# PART 9: STRING VALIDATION
# ========================================

test_email = "bob.williams@company.com"
test_code = "EMP-2024-BW"

starts_with_emp = test_code.startswith("EMP")
ends_with_com = test_email.endswith(".com")
print(f"Code: {test_code}")
print(f"Starts with EMP: {starts_with_emp}")
print(f"Email: {test_email}")  
print(f"Ends with .com: {ends_with_com}")

o_count = test_email.count("o")
print(f"Letter 'o' in email: {o_count}")

print()