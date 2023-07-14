import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useGetFiveDaysForecast } from "../../api/weather-forecast/fiveDaysWeatherGetApi";
import { Button } from "@mui/material";
import Spinner from "../../components/Spinner";
import TemperatureChart from "./TemperatureChart";
import useStore from "../../store/useStore";
import PageContentTemplate from "../../components/PageContentTemplate";
import { PageTemplate } from "../../components/PageTemplate";

const WeatherDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get("lat");
  const lon = queryParams.get("lon");

  const tempUnit = useStore((state) => state.tempUnit);

  const units = tempUnit === "C" ? "metric" : "imperial";

  const { data, isLoading, isError } = useGetFiveDaysForecast(lat, lon, units);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <PageTemplate>
      <PageContentTemplate title="Graph">
        <TemperatureChart weatherData={data} />
      </PageContentTemplate>
      <Link to="/cities">
        <Button>Back</Button>
      </Link>
    </PageTemplate>
  );
};

export default WeatherDetail;
