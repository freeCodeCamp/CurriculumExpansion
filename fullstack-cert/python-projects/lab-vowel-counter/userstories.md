1. You should create a dictionary named `user_data` that stores usernames as keys and passwords as follows:

```md
    user_data = {
    "Amy": "password123",
    "Arnold": "securepass",
    "admin": "admin123"
}
```

2. You should define a function named `login` that takes two parameters: `users` (a dictionary) and `max_attempts` (an integer with a default value of `3`).

3. Inside the `login` function, you should:

    - Track the attempts made by the user and ensure that the user has a maximum of `3` attempts.
    - Take a username and password from the user using the prompt `"Enter your username and password (format: username password): "`.
    - Check if the entered username and password match a stored entry in the `users` dictionary.
    - If the login attempt is successful, print `"Login successful!"` and return `True`.
    - If the login attempt is unsuccessful, print `"Invalid username or password. X attempt(s) left."` if there are attempts remaining.
    - If the user fails all login attempts, print `"Too many failed attempts. Access denied!"` and return `False`.

4. You should call the `login` function with `user_data` as an argument at least once.
