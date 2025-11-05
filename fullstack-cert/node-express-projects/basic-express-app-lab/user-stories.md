1. You should import the `express` module.

2. You should create an Express application instance and assign it to a variable named `app`.

3. You should define a `port` variable and assign it the value `3000`.

4. You should have a GET route for the root path `/` that sends the response `Welcome to Camper Bot's homepage!`.

5. You should have a GET route for the `/hobbies` path that sends the response `I love cycling, boating, and playing guitar.`.

6. You should have a GET route for the `/skills` path that sends the response `JavaScript, Node.js, and Express.js!`.

7. You should have a GET route for the `/api/profile` path that sends a JSON response.

8. The `/api/profile` route should return a JSON object with a `name` property set to `Camper Bot`.

9. The `/api/profile` route should return a JSON object with a `hobbies` property containing an array of strings for the hobbies `['cycling', 'boating', 'guitar']`.

10. The `/api/profile` route should return a JSON object with a `skills` property containing an array of strings for the skills `['JavaScript', 'Node.js', 'Express.js']`.

11. Your application should listen on the port specified in the `port` variable.

12. When the server starts listening, you should log the message `Personal Profile App running at http://localhost:3000` to the console.
