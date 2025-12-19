// --- 1. 404 Catch-All Middleware ---
// This runs only if NO route handler (including the API router) has sent a response.
const notFoundHandler = (req, res, next) => {
    console.log('[Middleware] 404 Catch-All activated.');
    
    // Create the 404 error object
    const error = new Error(`Cannot find ${req.originalUrl}`);
    error.status = 404;

    // Pass the error object to the next error-handling middleware (the 500 handler)
    next(error); 
};


// --- 2. Final Error-Handling Middleware (Must have 4 arguments) ---
const finalErrorHandler = (err, req, res, next) => {
    // Determine the status code (default to 500 for unhandled exceptions)
    const status = err.status || 500;
    
    // Log the error internally
    console.error(`[Final Handler] Status ${status}: ${err.message}`);
    
    // Send a clean, standardized JSON response to the client
    res.status(status).json({
        error: true,
        status: status,
        message: err.status === 500 
            ? 'Internal Server Error (Check Server Logs)' 
            : err.message
    });
};

module.exports = {
    notFoundHandler,
    finalErrorHandler
};