import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import WeatherCard from "./WeatherCard";
import Search from "./Search";

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    // Fetch weather data from API or mock data source
    const mockWeatherData = [
      {
        id: 1,
        city: "New York",
        temperature: 25,
        weather: "Sunny",
        highTemp: 30,
        lowTemp: 20,
      },
      {
        id: 2,
        city: "London",
        temperature: 18,
        weather: "Cloudy",
        highTemp: 22,
        lowTemp: 15,
      },
      {
        id: 3,
        city: "Tokyo",
        temperature: 30,
        weather: "Clear",
        highTemp: 32,
        lowTemp: 26,
      },
      {
        id: 3,
        city: "Tokyo",
        temperature: 30,
        weather: "Clear",
        highTemp: 32,
        lowTemp: 26,
      },
      {
        id: 3,
        city: "Tokyo",
        temperature: 30,
        weather: "Clear",
        highTemp: 32,
        lowTemp: 26,
      },
    ];

    setWeatherData(mockWeatherData);
  }, []);

  return (
    <>
      <Search />
      {/* <Grid container spacing={2}>
        {weatherData.map((weather) => (
          <Grid
            item
            key={weather.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ flexGrow: 0, flexShrink: 0 }}
          >
            <WeatherCard
              city={weather.city}
              temperature={weather.temperature}
              weather={weather.weather}
              highTemp={weather.highTemp}
              lowTemp={weather.lowTemp}
            />
          </Grid>
        ))}
      </Grid> */}
    </>
  );
};

export default WeatherList;
