const express = require('express');
const app = express();
const PORT = 3000;

// Import modules
const apiRouter = require('./routes/api.routes');
const { notFoundHandler, finalErrorHandler } = require('./middleware/error.middleware');

// --- Standard Route Mounting ---
// All API routes are mounted under the base path '/api'
app.use('/api', apiRouter); 


// --- ERROR STACK (Order is CRITICAL) ---

// 1. 404 Catch-All (Runs AFTER all valid routes)
// If the route doesn't match anything in apiRouter, it falls here.
app.use(notFoundHandler);

// 2. Final Error Handler (Runs LAST) 
// It catches errors passed from routes (e.g., /crash) or the 404 handler.
app.use(finalErrorHandler);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// Test Instructions:

// 1. Test Success (200 OK)

// URL: http://localhost:3000/api

// Expected Result: Status 200 OK. Response: "API is available!"

// 2. Test 404 Catch-All
// URL: http://localhost:3000/nonsense

// Expected Result: Status 404 Not Found. Standardized JSON error response.

// 3. Test Client Error (400 Bad Request)
// URL: http://localhost:3000/api/bad-request

// Expected Result: Status 400 Bad Request. Standardized JSON error response with the specific message ("Client-side data is missing.").

// 4. Test Server Error (500 Internal Error)
// URL: http://localhost:3000/api/crash

// Expected Result: Status 500 Internal Server Error. Standardized JSON error response with a generic message ("Internal Server Error...").