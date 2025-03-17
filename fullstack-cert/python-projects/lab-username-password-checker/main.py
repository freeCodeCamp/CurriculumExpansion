def login(users, max_attempts=3):
    attempts = 0

    while attempts < max_attempts:
        user_input = input("Enter your username and password (format: username password): ").strip()
        
        username, password = user_input.split(" ", 1)
        username = username.lower()

        if username in users and users[username] == password:
            print("Login successful!")
            return True

        attempts += 1
        remaining_attempts = max_attempts - attempts

        if remaining_attempts > 0:
            print(f"Invalid username or password. {remaining_attempts} attempt(s) left.")
        else:
            print("Too many failed attempts. Access denied!")

    return False 

user_data = {
    "Amy": "password123",
    "Arnold": "securepass",
    "admin": "admin123"
}

login(user_data)
