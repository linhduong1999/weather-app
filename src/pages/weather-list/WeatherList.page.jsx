import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import WeatherCard from "./WeatherCard";
import AddCity from "./AddCity";
import useStore from "../../store/useStore";

const WeatherList = () => {
  const cities = useStore((state) => state.cities);

  return (
    <>
      <AddCity />
      <Grid container spacing={2}>
        {cities.length > 0 ? (
          cities.map((city) => (
            <Grid
              item
              key={`${city.name}-${city.coord.lat}-${city.coord.lon}`}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <WeatherCard data={city} />
            </Grid>
          ))
        ) : (
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h6" gutterBottom>
              You haven't added any cities yet.
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default WeatherList;
