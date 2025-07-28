async function fetchWeather() {
  const weatherEl = document.getElementById('weather');
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842&current_weather=true');
    const data = await response.json();
    const weather = data.current_weather;
    weatherEl.innerHTML = `
      <h4>Current Weather - Manila</h4>
      <p>Temp: ${weather.temperature}°C</p>
      <p>Wind: ${weather.windspeed} km/h</p>
    `;
  } catch (error) {
    weatherEl.innerHTML = '<p>Failed to load weather data.</p>';
    console.error(error);
  }
}

fetchWeather();


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.top-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});