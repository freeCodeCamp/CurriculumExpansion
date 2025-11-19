const express = require('express');
const axios = require('axios');
const router = express.Router();

const BASE_URL = 'https://weather-proxy.freecodecamp.rocks/api/city';

router.get('/:city', async (req, res) => {
    const city = req.params.city;

    const apiUrl = `${BASE_URL}/${city}`;

    try {
        // Step 1: Perform the machine-to-machine communication (GET request)
        const response = await axios.get(apiUrl);

        // Step 2: Extract key data from the external JSON response
        const apiData = response.data;
        
        // This is the simplified data structure we will send back
        const weatherData = {
            city: apiData.name,
            country: apiData.sys.country,
            temperature: apiData.main.temp, // Temperature in Celsius
            description: apiData.weather[0].description,
            iconUrl: apiData.weather[0].icon // Includes the image link
        };

        // Step 3: Send a simplified, clean JSON response back to the client
        res.json(weatherData); // Uses res.json()
        
    } catch (error) {
        // Handle API errors (e.g., unsupported city or server issue)
        console.error(`Error fetching weather for ${city}:`, error.message);
        
        // Use a 404 status if a city is not supported or not found
        res.status(404).json({ 
            error: `Could not fetch weather data for "${city}".`,
            hint: "The proxy API only supports: New York, Chicago, Los Angeles, Tokyo, and London."
        });
    }
});

module.exports = router;