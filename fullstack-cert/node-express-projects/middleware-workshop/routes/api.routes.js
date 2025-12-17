const express = require('express');
const router = express.Router();

// Route to simulate successful data retrieval
router.get('/', (req, res) => {
    res.status(200).send('API is available!');
});

// Route to intentionally trigger a 500 Internal Server Error
router.get('/crash', (req, res, next) => {
    console.log('[API Route] Intentionally throwing a 500 error.');
    
    // Create an error object
    const err = new Error('Database connection failed.');
    
    // Pass the error to the Express error stack
    next(err); 
});

// Route to trigger a 400 Bad Request
router.get('/bad-request', (req, res, next) => {
    console.log('[API Route] Intentionally throwing a 400 error.');
    const err = new Error('Client-side data is missing.');
    err.status = 400; // Manually setting the status
    next(err); // Passes control to the error handler
});

module.exports = router;