import React, { FC, RefObject, useRef, useState } from "react";
import { TextField } from "@mui/material";

import { usePlacesWidget } from "react-google-autocomplete";

const Search = () => {
  const [city, setCity] = useState({});
  const { ref: materialRef } = usePlacesWidget({
    apiKey: import.meta.env.VITE_REACT_APP_GOOGLE,
    onPlaceSelected: (place) => {
      setCity({
        lat: place.geometry.location.lat(),
        lon: place.geometry.location.lng(),
        name: formatted_address,
      });
      console.log(place);
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

export default Search;
