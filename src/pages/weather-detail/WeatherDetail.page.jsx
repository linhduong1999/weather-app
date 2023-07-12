import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGetFiveDaysForecast } from "../../api/weather-forecast/fiveDaysWeatherGetApi";

const WeatherDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");

  const { data, isLoading, isError } = useGetFiveDaysForecast(lat, lon);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      Weather at {lat} and {lon}
    </div>
  );
};

export default WeatherDetail;
