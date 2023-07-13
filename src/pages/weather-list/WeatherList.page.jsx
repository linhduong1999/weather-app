import React from "react";
import { Box, Typography } from "@mui/material";
import WeatherCard from "./WeatherCard";
import AddCity from "./AddCity";
import useStore from "../../store/useStore";
import { styled } from "@mui/material/styles";
import { formatDate } from "../../utils/formatDate";

const WeatherList = () => {
  const { user, cities } = useStore((state) => ({
    user: state.user,
    cities: state.cities,
  }));

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      flexGrow="1"
      maxWidth={"1300px"}
    >
      <StyledHeader display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Typography variant="body1">Welcome, {user}</Typography>
          <Typography variant="h5">
            {formatDate(new Date()).dayOfWeek} {formatDate(new Date()).dateStr}
          </Typography>
        </Box>
        <AddCity />
      </StyledHeader>
      <CityListContainer display="flex" flexDirection="column" gap={3}>
        <Typography variant="h4">Your Cities</Typography>
        <Box display="flex" flexDirection="column" gap={3}>
          {cities.length > 0 ? (
            cities.map((city) => (
              <Box
                key={`${city.name}-${city.coord.lat}-${city.coord.lon}`}
                marginLeft={0}
              >
                <WeatherCard data={city} />
              </Box>
            ))
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h6" gutterBottom>
                You haven't added any cities yet.
              </Typography>
            </Box>
          )}
        </Box>
      </CityListContainer>
    </Box>
  );
};

const CityListContainer = styled(Box)(
  ({ theme }) => `
  margin-top: ${theme.spacing(4)};
  padding: ${theme.spacing(4)};
  border : 1px solid #d9d9d9;
  border-radius: 15px;
  background-color: #ffffff;
`
);

const StyledHeader = styled(Box)(
  ({ theme }) => `
  padding: ${theme.spacing(2)}
`
);
export default WeatherList;
