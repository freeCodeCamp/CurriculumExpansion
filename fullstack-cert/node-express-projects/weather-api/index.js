const express = require('express');
const path = require('path');
const weatherRouter = require('./routes/weather'); 

const app = express();
const PORT = 3000;

// 1. Serving Static Files
app.use(express.static(path.join(__dirname, 'public')));

// 2. Modular Routing
// All requests starting with /api/weather will be handled by weatherRouter
app.use('/api/weather', weatherRouter);

// 3. Simple Route 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Test API endpoint: http://localhost:${PORT}/api/weather/London`);
});