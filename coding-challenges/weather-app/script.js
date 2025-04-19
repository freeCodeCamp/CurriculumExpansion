// Body background colors will switch between loading, default and denied-location classes
const body = document.querySelector("body");

function removeClassesFromEl(el) {
  el.className = "";
}

function updateScreen(status) {
  removeClassesFromEl(body);

  if (status === "loading") {
    body.classList.add("loading");
  } else if (status === "denied-location") {
    body.classList.add("denied-location");
    console.log("location denied");
  } else {
    body.classList.add("default");
  }
}

async function getWeatherData(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const res = await fetch(
    `https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`
  );

  if (!res.ok) {
    updateScreen("location-denied");
    console.error("There was an error loading the data");
  }

  const data = res.json();
  updateScreen("default");
  console.log("Weather data: ", data);
}

function failedToLoadData() {
  updateScreen("denied-location");
}

// Check if the geolocation object is available or is not supported in the browser.

if (!("geolocation" in navigator) || !navigator.geolocation) {
  updateScreen("denied-location");
} else {
  updateScreen("loading");
  navigator.geolocation.getCurrentPosition(getWeatherData, failedToLoadData);
}
