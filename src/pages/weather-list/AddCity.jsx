import React from "react";
import { TextField } from "@mui/material";
import { usePlacesWidget } from "react-google-autocomplete";
import { getApiKeyGoogleAutocomplete } from "../../utils/environment";
import { styled } from "@mui/material/styles";

const AddCity = ({ handleAdd }) => {
  const { ref: materialRef } = usePlacesWidget({
    apiKey: getApiKeyGoogleAutocomplete(),
    onPlaceSelected: (place) => {
      handleAdd(place);
      materialRef.current.value = "";
    },
    language: "en",
  });

  return (
    <StyledTextField
      color="secondary"
      variant="outlined"
      inputRef={materialRef}
      placeholder="Search to Add a City"
    />
  );
};

const StyledTextField = styled(TextField)(
  ({ theme }) => `
    width: 400px;

    & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.palette.primary.main};
    }
    & .MuiOutlinedInput-notchedOutline {
      border-radius: ${theme.shape.borderRadius.s};
    }
    & .MuiInputBase-input {
      border-radius: ${theme.shape.borderRadius.s};
      color: ${theme.palette.primary.main};
      background-color: white;

    }
  `
);

export default React.memo(AddCity);
