import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import useStore from "../../store/useStore";

const WeatherCard = ({ data }) => {
  const tempUnit = useStore((state) => state.tempUnit); // Updated this to match the store object

  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardHeader title={data.name} /> {/* Updated to use data.name */}
      <CardContent>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Current Temperature: {data[tempUnit].current}°{tempUnit}{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          High: {data[tempUnit].high}°{tempUnit} / Low: {data[tempUnit].low}°
          {tempUnit}{" "}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Weather: {data.weather.description}{" "}
          {/* Updated to use data.weather.description */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
