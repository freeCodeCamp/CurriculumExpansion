1. You should import the `express` module.

2. You should create an Express application instance and assign it to a variable.

3. You should define a `maintenanceMode` variable and assign it a boolean value.

4. You should have an application-level middleware function that checks the `maintenanceMode` variable.

5. In the application-level middleware function:

- If `maintenanceMode` is `true`, the middleware should send the response `The server is currently under maintenance. Please try again later.` and not proceed to the next middleware or route handler.

- If `maintenanceMode` is `false`, the middleware should call `next()` to continue to the next middleware or route handler.

6. You should have a GET route for the root path `/` that sends the response `Welcome to the homepage!`.

7. You should have a GET route for the `/about` path that sends the response `About page`.

8. Your application should listen on port `3000`.

9. When the server starts listening, you should log the message `Server running on http://localhost:3000` to the console.

10. When `maintenanceMode` is `true`, accessing any route should return the maintenance message instead of the route's response.

11. When `maintenanceMode` is `false`, all routes should function normally and return their respective responses.