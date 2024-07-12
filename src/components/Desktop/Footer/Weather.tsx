import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "0b7eb4fd779a65aee25690d5a190c857";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const city = "London"; // Remplacez par la ville de votre choix

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0b7eb4fd779a65aee25690d5a190c857`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Current Weather in {city}</h1>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Weather: {weatherData.weather[0].main}</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
