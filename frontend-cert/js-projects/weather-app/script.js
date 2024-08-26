document.addEventListener("DOMContentLoaded", () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else {
    alert('Geolocation is not available');
  }
});

async function getWeather(location) {
  const url = `https://weather-proxy.freecodecamp.rocks/api/current?lat=${location.coords.latitude}&lon=${location.coords.longitude}`
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    console.log(`${json.weather[0].description.toUpperCase()} in ${json.name.toUpperCase()}`)
    
    document.getElementById("weather-icon").src = json.weather[0].icon

    document.getElementById("main-temperature").textContent = document.getElementById("main-temperature").textContent.replace("{{template}}", json.main.temp)
    document.getElementById("feels-like").textContent = document.getElementById("feels-like").textContent.replace("{{template}}", json.main.feels_like)

    document.getElementById("humidity").textContent += json.main.humidity

    document.getElementById("wind").textContent += json.wind.speed
    document.getElementById("wind-gust").textContent += json.wind.gust
    
    document.getElementById("weather-main").textContent += json.weather[0].main
    
    document.getElementById("location").textContent = `${json.weather[0].description.toUpperCase()} in ${json.name.toUpperCase()}`
  } catch (error) {
    console.error(error.message);
  }
}