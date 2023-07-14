import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import WeatherCard from "./WeatherCard";
import AddCity from "./AddCity";
import useStore from "../../store/useStore";
import { styled } from "@mui/material/styles";
import { getFormattedDate } from "../../utils/formatDate";
import EmptyState from "../../components/EmptyState";
import PageContentTemplate from "../../components/PageContentTemplate";
import { PageTemplate } from "../../components/PageTemplate";

const WeatherList = () => {
  const { user, cities } = useStore(({ user, cities }) => ({ user, cities }));

  return (
    <PageTemplate>
      <HeaderContainer>
        <Box>
          <Typography variant="body1">Welcome, {user}</Typography>
          <Typography variant="h5">{getFormattedDate(new Date())}</Typography>
        </Box>
        <AddCity />
      </HeaderContainer>
      <PageContentTemplate title="Your Cities">
        <Stack display="flex" flexDirection="column" gap={3}>
          {cities.length > 0 ? (
            cities.map((city) => (
              <WeatherCardContainer
                key={`${city.name}-${city.coord.lat}-${city.coord.lon}`}
              >
                <WeatherCard data={city} />
              </WeatherCardContainer>
            ))
          ) : (
            <EmptyState />
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
  margin-bottom: ${theme.spacing(4)};

`
);

const WeatherCardContainer = styled(Box)(
  () => `
  margin-left: 0;
`
);

export default WeatherList;
