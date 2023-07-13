import React from "react";
import { Box, Typography } from "@mui/material";
import WeatherCard from "./WeatherCard";
import AddCity from "./AddCity";
import useStore from "../../store/useStore";
import { styled } from "@mui/material/styles";

const WeatherList = () => {
  const cities = useStore((state) => state.cities);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      flexGrow="1"
      maxWidth={"1300px"}
    >
      <AddCity />
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
  padding: ${theme.spacing(4)};
  border : 1px solid #d9d9d9;
  border-radius: 15px;
  background-color: #ffffff;
`
);

export default WeatherList;
