import React, { FC, RefObject, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { usePlacesWidget } from "react-google-autocomplete";
import { useGetCurrentForecast } from "../../api/weather-forecast/currentWeatherGetApi";
import useStore from "../../store/useStore";
import { getApiKeyGoogleAutocomplete } from "../../utils/environment";

const AddCity = () => {
  const addCity = useStore((state) => state.addCity);

  const { data, isLoading, isError, fetch } = useGetCurrentForecast();

  const handleAdd = async (place) => {
    const city = await fetch(
      place.geometry.location.lat(),
      place.geometry.location.lng()
    );
    addCity(city);
  };

  const { ref: materialRef } = usePlacesWidget({
    apiKey: getApiKeyGoogleAutocomplete(),
    onPlaceSelected: (place) => {
      handleAdd(place);
      materialRef.current.value = "";
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
