import re
import secrets
import string

def generate_password(length=16, nums=1, special_chars=1, uppercase=1, lowercase=1):
    # Define the possible characters for the password
    letters = string.ascii_letters   
    digits = string.digits
    symbols = string.punctuation

    # Combine all characters
    all_characters = letters + digits + symbols

    while True:
        password = ''    
        # Generate password
        for i in range(length):
            password += secrets.choice(all_characters)

        # Check constraints        
        constraints = [
            (nums, re.findall('[\d]', password)),
            (special_chars, re.findall('[\W]', password)),
            (uppercase, re.findall('[A-Z]', password)),
            (lowercase, re.findall('[a-z]', password))
        ]

        if all([i <= len(j) for i, j in constraints]):
            break    
    
    return password

if __name__ == "__main__":    
    newPassword = generate_password()
    print("Generated Password:", newPassword)