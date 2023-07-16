import React, { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import WeatherIcon from "../../components/WeatherIcon";
import { styled } from "@mui/material/styles";
import { capitalizeFirstLetter } from "../../utils/transformData";
import useStore from "../../store/useStore";

const CurrentCity = ({ data }) => {
  const { name, weather } = data;
  const { tempUnit, user } = useStore(({ tempUnit, user }) => ({
    tempUnit,
    user,
  }));

  const memoizedWeatherIcon = useMemo(
    () => <WeatherIcon code={weather.icon} isIcon={false} />,
    [weather.icon]
  );

  return (
    <ContentContainer>
      <LeftContent>
        {memoizedWeatherIcon}
        <Box display="flex" flexDirection={"column"}>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="body1">
            {capitalizeFirstLetter(weather.description)}
          </Typography>
        </Box>
      </LeftContent>

      <RightContent>
        <Typography variant="h3">
          {data[tempUnit[user]].current}°{tempUnit[user]}
        </Typography>
        <Typography variant="body1">Today</Typography>
      </RightContent>
    </ContentContainer>
  );
};

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
  display:flex;
  flex-direction:row;
  align-items:center;
  flex: 4;
  `
);

const RightContent = styled(Box)(
  () => `
  display:flex;
  flex-direction:column;
  align-items:center;
  flex: 1;
  `
);

export default React.memo(CurrentCity);
