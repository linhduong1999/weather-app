import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

const WeatherCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          London
        </Typography>
        <Typography variant="h5" component="div">
          27 C
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
