import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useGetFiveDaysForecast } from "../../api/weather-forecast/fiveDaysWeatherGetApi";
import { Button } from "@mui/material";
import TemperatureChart from "./TemperatureChart";
import useStore from "../../store/useStore";
const WeatherDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");

  const tempUnit = useStore((state) => state.tempUnit);
  const units = tempUnit === "C" ? "metric" : "imperial";
  const { data, isLoading, isError } = useGetFiveDaysForecast(lat, lon, units);

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
      <TemperatureChart weatherData={data} />
    </div>
  );
};

export default WeatherDetail;
