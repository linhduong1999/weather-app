import React, { useCallback } from "react";
import { Box, Typography, Stack, Skeleton } from "@mui/material";
import WeatherCard from "./WeatherCard";
import AddCity from "./AddCity";
import useStore from "../../store/useStore";
import { styled } from "@mui/material/styles";
import { getFormattedDate } from "../../utils/formatDate";
import EmptyState from "../../components/EmptyState";
import { useGetCurrentForecast } from "../../api/weather-forecast/currentWeatherGetApi";
import PageContentTemplate from "../../components/PageContentTemplate";
import { PageTemplate } from "../../components/PageTemplate";

const WeatherList = () => {
  const { user, cities, addCity } = useStore(({ user, cities, addCity }) => ({
    user,
    cities,
    addCity,
  }));
  const { isLoading, fetchData } = useGetCurrentForecast();

  const handleAdd = useCallback(
    async (place) => {
      const city = await fetchData(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      );
      addCity(city);
    },
    [fetchData, addCity]
  );

  return (
    <PageTemplate>
      <HeaderContainer>
        <Box>
          <Typography variant="body1">Welcome, {user}</Typography>
          <Typography variant="h5">
            Today is {getFormattedDate(new Date())}
          </Typography>
        </Box>
        <AddCity handleAdd={handleAdd} />
      </HeaderContainer>
      <PageContentTemplate title="Your Cities">
        <Stack display="flex" flexDirection="column" gap={3}>
          {isLoading && (
            <WeatherCardContainer>
              <Skeleton animation="wave" variant="rectangular" height={140} />
            </WeatherCardContainer>
          )}
          {!isLoading && cities.length === 0 ? (
            <EmptyState />
          ) : (
            cities.map((city) => (
              <WeatherCardContainer
                key={`${city.name}-${city.coord.lat}-${city.coord.lon}`}
              >
                <WeatherCard data={city} />
              </WeatherCardContainer>
            ))
          )}
        </Stack>
      </PageContentTemplate>
    </PageTemplate>
  );
};

const HeaderContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing(2)};
  padding-right:0;
`
);

const WeatherCardContainer = styled(Box)(
  ({ theme }) => `
  margin-left: 0;
  border : 1px solid ${theme.palette.secondary.main};
  overflow: hidden;
  border-radius: ${theme.shape.borderRadius.s};
`
);

export default React.memo(WeatherList);
