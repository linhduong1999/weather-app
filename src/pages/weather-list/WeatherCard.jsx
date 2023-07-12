import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WeatherCard = ({ city, temperature, weather, highTemp, lowTemp }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {city}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Temperature: {temperature}°C
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          High: {highTemp}°C / Low: {lowTemp}°C
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Weather: {weather}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
