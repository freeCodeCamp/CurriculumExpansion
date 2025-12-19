const express = require('express');
const app = express();
const PORT = 3000;

// --- Middleware Definitions ---

// A. Built-in Middleware: Parses application/x-www-form-urlencoded data (from HTML forms)
// This is essential for reading form submissions.
app.use(express.urlencoded({ extended: true }));

// B. Custom Middleware 1: The Cleaner (Sanitizer)
const inputCleaner = (req, res, next) => {
    console.log('[Middleware 1] Cleaning/Modifying data...');
    if (req.body.username) {
        // Force the username to be lowercase
        req.body.username = req.body.username.toLowerCase();
    }
    if (req.body.comment) {
        // Remove simple HTML tags for security demonstration (basic)
        req.body.comment = req.body.comment.replace(/<[^>]*>/g, '');
    }
    next();
};

// C. Custom Middleware 2: The Validator (Gatekeeper)
const inputValidator = (req, res, next) => {
    console.log('[Middleware 2] Validating data...');
    const { username, comment } = req.body;

    if (!username || username.length < 3) {
        // Stop the cycle and redirect immediately if validation fails
        console.log('[Middleware 2] Validation FAILED: Username too short.');
        return res.redirect('/form?error=Username must be at least 3 characters.');
    }

    // You could also add more complex checks here...

    console.log('[Middleware 2] Validation PASSED.');
    next();
};

// --- Application Setup ---

// Serve the static HTML form page
app.use('/form', express.static('public'));

// --- Route Handlers ---

// 1. GET route to display the form and handle errors via query string
app.get('/', (req, res) => {
    // Redirect to the form route (which handles the static file)
    res.redirect('/form');
});

// 2. POST route: The data must pass through the middleware chain first
app.post('/submit', 
    inputCleaner,      // Runs first: Cleans the input
    inputValidator,    // Runs second: Validates the cleaned input
    (req, res) => {    // Runs last: The final route handler
        // If we reach here, the data is clean and valid.
        const { username, comment } = req.body;
        
        res.status(200).send(`
            <h1>✅ Submission Successful!</h1>
            <p>Middleware cleaned and validated your data:</p>
            <p><strong>Username:</strong> ${username} (Now lowercase)</p>
            <p><strong>Comment:</strong> ${comment} (Now sanitized)</p>
            <hr>
            <a href="/form">Submit another form</a>
        `);
    }
);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Open in browser: http://localhost:${PORT}/form`);
});