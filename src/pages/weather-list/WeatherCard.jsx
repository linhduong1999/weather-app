import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import useStore from "../../store/useStore";
import WeatherIcon from "./WeatherIcon";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/transformData";

const WeatherCard = ({ data }) => {
  const { removeCity, tempUnit } = useStore((state) => ({
    removeCity: state.removeCity,
    tempUnit: state.tempUnit,
  }));

  return (
    <StyledCard>
      <StyledIconButton
        onClick={() => removeCity(data.name)}
        aria-label="Remove"
      >
        <ClearIcon />
      </StyledIconButton>
      <Link
        to={`/cities/${data.name}?lat=${data.coord.lat}&lon=${data.coord.lon}`}
        style={{ textDecoration: "none" }}
      >
        <InnerBox>
          <Box>
            <Typography variant="h4" color="common.white">
              {data.name}
            </Typography>
            <Box display="flex" alignItems="center">
              <WeatherIcon code={data.weather.icon} />
              <Typography variant="body1" color="common.white">
                {capitalizeFirstLetter(data.weather.description)}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h3" color="common.white">
              {data[tempUnit].current}°{tempUnit}
            </Typography>
            <Box display="flex" sx={{ gap: "8px" }}>
              <Typography variant="body1" color="common.white">
                L: {data[tempUnit].low}°{tempUnit}
              </Typography>
              <Typography variant="body1" color="common.white">
                H: {data[tempUnit].high}°{tempUnit}
              </Typography>
            </Box>
          </Box>
        </InnerBox>
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled(Box)(
  ({ theme }) => `
  padding: ${theme.spacing(4)};
  border : 1px solid #d9d9d9;
  border-radius: 10px;
  background-color: #1e2152;
  position: relative;
  display: flex;
  flex-direction: column;
`
);

const StyledIconButton = styled(IconButton)(
  ({ theme }) => `
  position: absolute;
  top: ${theme.spacing(1)};
  right: ${theme.spacing(1)};
  color: white;
`
);

const InnerBox = styled(Box)(
  () => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`
);

export default WeatherCard;
