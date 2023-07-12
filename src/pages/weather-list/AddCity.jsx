import React, { FC, RefObject, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { usePlacesWidget } from "react-google-autocomplete";
import { useGetCurrentForecast } from "../../api/weather-forecast/currentWeatherGetApi";
import useStore from "../../store/useStore";

const AddCity = () => {
  const addCity = useStore((state) => state.addCity);

  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_REACT_APP_GOOGLE,
    onPlaceSelected: async (place) => {
      const city = await useGetCurrentForecast(
        place.geometry.location.lat(),
        place.geometry.location.lng(),
        place.formatted_address
      );

      addCity(city);
    },
    language: "en",
  });

  return (
    <TextField
      fullWidth
      color="secondary"
      variant="outlined"
      inputRef={materialRef}
    />
  );
};
AddCity;
export default AddCity;
