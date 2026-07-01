import { useState } from "react";
import "./WeatherApp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      // First, get coordinates from city name using geocoding API
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
      );

      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results || geoData.results.length === 0) {
        setWeather(null);
        alert("City not found");
        return;
      }

      const { latitude, longitude, name } = geoData.results[0];

      // Get weather data using coordinates
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto`
      );

      const weatherData = await weatherRes.json();
      console.log(weatherData);

      // Transform data to match original structure
      setWeather({
        name: name,
        main: {
          temp: weatherData.current.temperature_2m,
          humidity: weatherData.current.relative_humidity_2m,
        },
        wind: {
          speed: weatherData.current.wind_speed_10m,
        },
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Error fetching weather data");
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-title">Weather App</div>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="weather-input"
      />

      <button onClick={getWeather} className="weather-btn">
        Search
      </button>

      {weather && (
        <div className="weather-results">
          <h2>Temperature: {weather.main.temp}°C</h2>
          <h2>Humidity: {weather.main.humidity}</h2>
          <h2>Wind Speed: {weather.wind.speed}</h2>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
