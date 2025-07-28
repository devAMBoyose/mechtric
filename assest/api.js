async function fetchWeather(city = "manila") {
  const cityCoords = {
    manila: { lat: 14.5995, lon: 120.9842 },
    cebu: { lat: 10.3157, lon: 123.8854 },
    davao: { lat: 7.1907, lon: 125.4553 }
  };

  const { lat, lon } = cityCoords[city];
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const weather = data.current_weather;

    document.getElementById("weather-text").innerHTML =
      `Temp: <span class="blinking-temp">${weather.temperature}°C</span> | ` +
      `Wind: <span class="blinking-temp">${weather.windspeed} km/h</span>`;
  } catch (err) {
    document.getElementById("weather-text").textContent = "Unable to load data.";
  }
}

fetchWeather(); // Load default (Manila)
