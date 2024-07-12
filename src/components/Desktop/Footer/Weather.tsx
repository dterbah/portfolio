import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import WhiteTypography from "../../utils/WhiteTypography";

const CITY = "Lyon";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  const CITY = import.meta.env.VITE_CITY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weatherData) {
    return <></>;
  }

  const { main, weather } = weatherData;
  const temperature = main.temp;
  const weatherIcon = weather[0].icon;
  const description: string = weather[0].description;

  const upperDescription = `${description[0].toUpperCase()}${description.substring(
    1
  )}`;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
          alt="Weather Icon"
        />
      </Box>
      <Box>
        <WhiteTypography variant="body1">{`${temperature}°C`}</WhiteTypography>
        <Typography variant="body1" sx={{ color: "grey" }}>
          {upperDescription}
        </Typography>
      </Box>
    </Box>
  );
};

export default Weather;
