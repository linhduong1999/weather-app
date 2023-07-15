import React, { Fragment, useMemo, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useGetFiveDaysForecast } from "../../api/weather-forecast/fiveDaysWeatherGetApi";
import { Button, Stack } from "@mui/material";
import Spinner from "../../components/Spinner";
import TemperatureChart from "./TemperatureChart";
import useStore from "../../store/useStore";
import PageContentTemplate from "../../components/PageContentTemplate";
import { PageTemplate } from "../../components/PageTemplate";
import { styled } from "@mui/material/styles";
import CurrentCity from "./CurrentCity";
import FiveDaysForecast from "./FiveDaysForecast";
import Link from "../../components/Link";

const WeatherDetail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lat = queryParams.get("lat") ?? "";
  const lon = queryParams.get("lon") ?? "";

  const { tempUnit, cities } = useStore(({ tempUnit, cities }) => ({
    tempUnit,
    cities,
  }));

  const units = useMemo(
    () => (tempUnit === "C" ? "metric" : "imperial"),
    [tempUnit]
  );

  const currentCity = useMemo(
    () => cities.find((city) => city.coord.lat == lat && city.coord.lon == lon),
    [cities, lat, lon]
  );

  const { data, isLoading } = useGetFiveDaysForecast(lat, lon, units);

  const renderContent = useCallback(() => {
    return (
      <Fragment>
        <Link to="/cities">
          <StyledButton>Back to Cities</StyledButton>
        </Link>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <CustomPageContentTemplate>
              <CurrentCity data={currentCity} />
            </CustomPageContentTemplate>
            <PageContentTemplate title="5 Days ForeCast">
              <FiveDaysForecast weatherData={data} />
            </PageContentTemplate>
            <PageContentTemplate title="Graph">
              <TemperatureChart weatherData={data} />
            </PageContentTemplate>
          </>
        )}
      </Fragment>
    );
  }, [isLoading, currentCity, data]);

  return <PageTemplate>{renderContent()}</PageTemplate>;
};

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius.s,
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const CustomPageContentTemplate = styled(Stack)`
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.shape.borderRadius.m};
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export default React.memo(WeatherDetail);
