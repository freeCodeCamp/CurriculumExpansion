<!-- Form input cleaner -->

1. You should import the `express` module.

2. You should create an Express application instance and assign it to a variable.

3. You should define a constant `PORT` and assign it the value `3000`.

4. You should use the built-in `express.urlencoded()` middleware with `{ extended: true }` to parse form data.

5. You should create a custom middleware function called `inputCleaner` that:

- Logs the message `[Middleware 1] Cleaning/Modifying data...` to the console.

- Converts `req.body.username` to lowercase if it exists.

- Removes HTML tags from `req.body.comment` if it exists using the regex pattern `/<[^>]*>/g`.

- Calls `next()` to continue to the next middleware.

6. You should create a custom middleware function called `inputValidator` that:

- Logs the message `[Middleware 2] Validating data...` to the console.

- Checks if `username` exists and has a length of at least 3 characters.

- If validation fails, logs `[Middleware 2] Validation FAILED: Username too short.` and redirects to `/form?error=Username must be at least 3 characters.` without calling `next()`.

- If validation passes, logs `[Middleware 2] Validation PASSED.` and calls `next()`.

7. You should use `express.static()` middleware to serve static files from the `public` directory at the `/form` route.

8. You should have a GET route for the root path `/` that redirects to `/form`.

9. You should have a POST route for the `/submit` path that:

- Uses `inputCleaner` as the first route-specific middleware.

- Uses `inputValidator` as the second route-specific middleware.

- Has a final handler that sends an HTML response with the cleaned and validated `username` and `comment`.

- The HTML response should include a success heading, display the submitted data, and provide a link back to `/form`.

10. Your application should listen on port `3000`.

11. When the server starts listening, you should log two messages to the console:
- `Server running on http://localhost:3000`
- `Open in browser: http://localhost:3000/form`

12. When a user submits a form to `/submit`, the data should pass through `inputCleaner` first, then `inputValidator`, and finally reach the route handler if validation passes.

13. The middleware chain should demonstrate the request-response cycle: if validation fails, the response is sent immediately without reaching the final handler.

<!-- test examples -->

| Input Value | Expected req.body.username in Final Handler | Action Taken by Middleware |
|-------------|---------------------------------------------|----------------------------|
| `"  Admin "` | `"admin"` | Cleaned and Validated. |
| `"AB"` | N/A (cycle halted) | Fails Validation, Redirected. |
| `"Test"`, Comment: `"<b>Bold</b>"` | `"test"`, Comment: `"Bold"` | Cleaned (lowercase and tag stripping). |