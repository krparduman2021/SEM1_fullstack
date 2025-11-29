import React, { useState } from "react";
import "./weatherapp.css";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "af9f63c59a649f27d602b96a43d0bd14";

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await res.json();
      console.log(data);

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
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
