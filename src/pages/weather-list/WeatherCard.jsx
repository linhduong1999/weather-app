import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import useStore from "../../store/useStore";
import WeatherIcon from "./WeatherIcon";
import { styled } from "@mui/material/styles";
import Link from "../../components/Link";
import { capitalizeFirstLetter } from "../../utils/transformData";

const WeatherCard = React.memo(({ data }) => {
  const { name, weather, coord } = data;
  const { removeCity, tempUnit } = useStore((state) => ({
    removeCity: state.removeCity,
    tempUnit: state.tempUnit,
  }));

  const handleRemoveCity = React.useCallback(() => {
    removeCity(name);
  }, [removeCity, name]);

  return (
    <CardContainer>
      <RemoveIconButton onClick={handleRemoveCity} aria-label="Remove">
        <ClearIcon />
      </RemoveIconButton>

      <Link to={`/cities/${name}?lat=${coord.lat}&lon=${coord.lon}`}>
        {/* Content */}
        <ContentContainer>
          <LeftContent>
            <Typography variant="h4" color="common.white">
              {name}
            </Typography>
            <Box display="flex" alignItems="center">
              <WeatherIcon code={weather.icon} />
              <Typography variant="body1" color="common.white">
                {capitalizeFirstLetter(weather.description)}
              </Typography>
            </Box>
          </LeftContent>

          <RightContent>
            <Typography variant="h3" color="common.white">
              {data[tempUnit].current}°{tempUnit}
            </Typography>
            <Box display="flex" gap={2}>
              <Typography variant="body1" color="common.white">
                L: {data[tempUnit].low}°{tempUnit}
              </Typography>
              <Typography variant="body1" color="common.white">
                H: {data[tempUnit].high}°{tempUnit}
              </Typography>
            </Box>
          </RightContent>
        </ContentContainer>
      </Link>
    </CardContainer>
  );
});

// Styled components
const CardContainer = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(4)};
    border : 1px solid ${theme.palette.secondary.main};
    border-radius: ${theme.shape.borderRadius.s};
    background-color: ${theme.palette.primary.main};
    position: relative;
    display: flex;
    flex-direction: column;
`
);

const RemoveIconButton = styled(IconButton)(
  ({ theme }) => `
  position: absolute;
  top: ${theme.spacing(1)};
  right: ${theme.spacing(1)};
  color: ${theme.palette.common.white};
`
);

const ContentContainer = styled(Box)(
  () => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`
);

const LeftContent = styled(Box)(
  () => `
  flex: 4;
`
);

const RightContent = styled(Box)(
  () => `
  flex: 1;
`
);

export default WeatherCard;
