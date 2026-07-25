# Rough Step Ideas

---

## Section 1: Project Setup

- A basic Express server is running and responding to requests
- All environment variables are loaded from a `.env` file before anything else reads them
- Security headers are automatically applied to every response
- Incoming requests with JSON bodies can be parsed
- A health-check endpoint confirms the server is up

---

## Section 2: Mock Database

- All users can be read from a JSON file
- An updated list of users can be written back to the JSON file
- A single user can be looked up by their email address
- A single user can be looked up by their ID

---

## Section 3: JWT Utilities

- A signed JWT can be generated from a given payload with a 1-day expiry
- A JWT can be verified and its payload returned
- An invalid or expired token produces `null` instead of crashing the app

---

## Section 4: Register and Login

- A new user can sign up with an email and password
- Signing up with an email that already exists is rejected
- Passwords are never stored as plain text
- A successful registration returns a JWT and a confirmation message
- A registered user can log in with the correct credentials
- Wrong credentials are rejected with the same generic error regardless of which field is wrong
- A successful login returns a JWT and a confirmation message

---

## Section 5: JWT Middleware and Protected Route

- A request without a token is rejected before it reaches any route handler
- A request with a tampered or expired token is rejected
- The decoded token payload is available to any route handler that needs it
- Authenticated users can access their own profile data without a database query

---

## Section 6: Logout and Token Blacklist

- A token can be invalidated server-side after logout
- Using a logged-out token on any protected route is rejected immediately
- The trade-off between client-side and server-side logout is understood

---

## Section 7: Role-Based Authorization

- Every user has a role that gets embedded in their JWT at login
- A route that requires admin access rejects regular-user tokens
- The difference between 401 (not authenticated) and 403 (not authorized) is understood
- Password hashes are never exposed in any API response
