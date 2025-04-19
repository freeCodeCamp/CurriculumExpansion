// TODO: work on toggle celsius and fahrenheit logic
// TODO: work on try again button logic
let isCelsius = true;

function getWeatherIcon(description) {
  const weatherIconEl = document.querySelector(".wi");
  // reset weather icons
  weatherIconEl.classList = "wi";

  function hasSomeKeywords(text, subStrings) {
    return subStrings.some((str) => text.includes(str));
  }

  if (hasSomeKeywords(description, ["sunny", "clear", "sun"])) {
    weatherIconEl.classList.add("wi-day-sunny");
  } else if (hasSomeKeywords(description, ["rain", "rainy"])) {
    weatherIconEl.classList.add("wi-rain");
  } else if (hasSomeKeywords(description, ["clouds", "cloudy"])) {
    weatherIconEl.classList.add("wi-cloudy");
  } else if (hasSomeKeywords(description, ["snow", "snowing", "snowy"])) {
    weatherIconEl.classList.add("wi-snow");
  }
}

function displayWeather(data) {
  const city = document.querySelector(".city");
  const currTemp = document.querySelector(".current-temp");
  const weatherDescriptor = document.querySelector(".weather-descriptor");
  const feelsLikeTemp = document.querySelector(".feel-like-temp");
  const humidityEl = document.querySelector(
    ".humidity-text-and-temp p:last-of-type span"
  );
  const windEl = document.querySelector(
    ".wind-text-and-description p:last-of-type span"
  );

  const {
    name,
    main: { temp: celsius, feels_like: celsiusFeelsLike, humidity },
    weather,
    wind: { speed },
  } = data;
  const { description } = weather[0];

  function getRoundedResult(num) {
    return Math.round(num);
  }

  city.textContent = name;
  getWeatherIcon(description);
  currTemp.innerHTML = `${getRoundedResult(celsius)} &deg; C`;
  weatherDescriptor.textContent = description;
  feelsLikeTemp.innerHTML = `Feels like ${getRoundedResult(
    celsiusFeelsLike
  )} &deg; C`;
  humidityEl.textContent = humidity;
  windEl.textContent = getRoundedResult(speed);
  console.log(data);
}

// Body background colors will switch between loading, default and denied-location classes
const body = document.querySelector("body");
const loadingContainer = document.querySelector(".loading-container.flex-col");
const deniedServicesContainer = document.querySelector(
  ".denied-location-container"
);
const mainContainer = document.querySelector("main");

function updateScreen(status) {
  body.className = "";

  if (status === "loading") {
    body.classList.add("loading");
    loadingContainer.style.display = "flex";
    deniedServicesContainer.style.display = "none";
    mainContainer.style.display = "none";
  } else if (status === "denied-location") {
    body.classList.add("denied-location");
    deniedServicesContainer.style.display = "block";
    loadingContainer.style.display = "none";
    mainContainer.style.display = "none";
  } else {
    body.classList.add("default");
    mainContainer.style.display = "block";
    loadingContainer.style.display = "none";
    deniedServicesContainer.style.display = "none";
  }
}

const errorMsgPara = document.querySelector(".error-msg");
const errorMsg = "There was an error loading the data.";

async function getWeatherData(position) {
  const { latitude, longitude } = position.coords;

  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const res = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/current?lat=${latitude}&lon=${longitude}`
    );

    if (!res.ok) {
      updateScreen("location-denied");
      console.error(errorMsg);
      deniedServicesContainer.style.display = "block";
      errorMsgPara.textContent = errorMsg;
      loadingContainer.style.display = "none";
      mainContainer.style.display = "none";
      return;
    }

    const data = await res.json();
    updateScreen("default");
    displayWeather(data);
  } catch (error) {
    updateScreen("location-denied");
    deniedServicesContainer.style.display = "block";
    errorMsgPara.textContent = errorMsg;
    loadingContainer.style.display = "none";
    mainContainer.style.display = "none";
    console.error(errorMsg, error);
  }
}

function failedToLoadData() {
  updateScreen("denied-location");
  errorMsgPara.textContent = errorMsg;
}

// Check if the geolocation object is available or is not supported in the browser.

if (!("geolocation" in navigator) || !navigator.geolocation) {
  updateScreen("denied-location");
} else {
  updateScreen("loading");
  navigator.geolocation.getCurrentPosition(getWeatherData, failedToLoadData);
}
