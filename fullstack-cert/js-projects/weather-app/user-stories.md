You should have an `img` element with the id `weather-icon` for displaying the weather icon.

You should have an element with the id `main-temperature` for displaying the main temperature.

You should have an element with the id `feels-like` for displaying what the temperature feels like.

You should have an element with the id `humidity` for displaying the amount of humidity in air.

You should have an element with the id `wind` element for displaying the wind speed.

You should have an element with the id `wind-gust` element for displaying the wind gust.

You should have an element with the id `weather-main` element for displaying the main weather type.

You should have an element with the id `location` element for displaying the current location.

Your app should automatically request the user's location when the page loads, and inform them if `geolocation` is not supported by their browser. If supported, then you should get the user's current geographic position. Otherwise display an `alert` with the text `Geolocation is not available` to the user .

You should have an asynchronous function named `getWeather` to fetch the weather information from the `https://weather-proxy.freecodecamp.rocks/api/current?lat=<LATITUDE>&lon=<LONGITUDE>` API.

The `getWeather`asynchronous function should accept the geolocation position object you got from the user when the page was loaded for the first time as input.

You should handle any errors that occur within the `getWeather` function, whether during or after the `geolocation` request.
