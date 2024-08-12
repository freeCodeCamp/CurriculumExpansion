document.addEventListener("DOMContentLoaded", () => {
  getLocation()
});

function getLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(getWeather);
  } else {
    alert('Geolocation is NOT Available');
  }
}

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
    document.getElementById("temperature").textContent = json.main.temp
  }catch (error) {
    console.error(error.message);
  }
}