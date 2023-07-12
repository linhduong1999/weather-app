import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useGetFiveDaysForecast } from "../../api/weather-forecast/fiveDaysWeatherGetApi";
import { Button } from "@mui/material";
import Chart from "./Chart";

const WeatherDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");

  const { data, isLoading, isError } = useGetFiveDaysForecast(lat, lon);
  console.log(
    "🚀 ~ file: WeatherDetail.page.jsx:14 ~ WeatherDetail ~ data:",
    data
  );

  useEffect(() => {
    // Fetch weather data here
  }, [lat, lon]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <Link to="/cities">
        <Button>Back</Button>
      </Link>
      <Chart />
    </div>
  );
};

export default WeatherDetail;
